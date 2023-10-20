// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";




contract NFTMarketplace is ERC721URIStorage , ReentrancyGuard , Ownable(msg.sender) {
    // defining some varibales
    uint256  private _tokenIds;
    uint256  private _itemssold;

    // stuct
    struct NFTTOKEN{
        uint256 id;
        address payable owner;
        address payable creator;
        uint256 price;
        uint256 royalty;
        bool listed;
    }


    // Mappings 
    mapping(uint256 => NFTTOKEN) public idToNFt;
    mapping(address => uint256[]) public addressToid;


    // Events 
    event NFTCreated(uint256 indexed tokenId , address owner  );
    event NFTListed(uint256 indexed tokenId , address owner , uint256 price );
    event NFTUnListed(uint256 indexed tokenId , address owner );
    event NFTSold(uint256 indexed tokenId ,  address indexed seller  , address  indexed buyer , int256 price , uint256  time );


    // Errors
    error PriceCannotBeZero();


    // Constructor
    constructor() ERC721("QuickMint Token" , "QCMT"){}


    /**
    @param  tokenURI  uri which will be getting from ipfs
    @param royalty % of royalty creator wants at each tx
    @dev it simply call mint function and settokenuri of openzeppelin library
     */
    function createNFT(string  memory tokenURI , uint256 royalty ) nonReentrant  public   payable   returns(uint256)   {

        require(royalty <= 50, "Royalty Cannot be Greater than 50%");

        _tokenIds++;

        uint256 new_tokenId = _tokenIds;

        // minting the nft to user
        _safeMint(msg.sender, new_tokenId);

        //Map the tokenId to the tokenURI (which is an IPFS URL with the NFT metadata)
        _setTokenURI(new_tokenId, tokenURI);

        idToNFt[new_tokenId] = NFTTOKEN(
             new_tokenId,
            payable(msg.sender),
            payable(msg.sender),
            0,
            royalty,
            false
    );
        addressToid[msg.sender].push(new_tokenId);
         return new_tokenId;
    }

    /**
    @param id token id of the nft 
     */
    function listNFTForSale(uint256 id , uint256 _price) nonReentrant  public  {
        require(idToNFt[id].owner == payable(msg.sender), "Owner is not the caller");
        require(idToNFt[id].listed == false, "listed is already  true");

        idToNFt[id].price = _price;
       
        _transfer(msg.sender, address(this), id);

        idToNFt[id].listed = true;
    }

    function unListNFt( uint256 _tokenId ) nonReentrant public{
        require(idToNFt[_tokenId].owner == payable(msg.sender));
        require(idToNFt[_tokenId].listed == true);
        _transfer(address(this), msg.sender, _tokenId);
        idToNFt[_tokenId].listed =  false;
        idToNFt[_tokenId].price =  0;
         
    }


    function updateNFTprice( uint256 _tokenId , uint256 _price) nonReentrant public{

        require(idToNFt[_tokenId].owner == payable(msg.sender), "Owner is not the caller");
        require(idToNFt[_tokenId].listed == true , "listed is false ");

        idToNFt[_tokenId].price = _price;
    }


      function sellNFT( uint256 _id) public payable nonReentrant  returns(bool){
    
        require(idToNFt[_id].listed == true, "NFT is not listed");
        require(msg.value >=  idToNFt[_id].price, "Msg.value is less than price");

        require(ownerOf(_id) == address(this), "NFT Owner is not contract address ");

        // Calculating Final Price to transfer to the seller 
        uint256 PlatformCommission = ((1 * idToNFt[_id].price) / 100); // we are cutting 1% of transaction fee
        uint256 Royalty = ((idToNFt[_id].royalty * idToNFt[_id].price) / 100);
        uint256 finalPrice = idToNFt[_id].price - (PlatformCommission + Royalty );

        // transferring thr final price to seller 
        idToNFt[_id].owner.transfer(finalPrice);

        // transferring the royalty to creator
        idToNFt[_id].creator.transfer(Royalty);

        // transferring the nft to the new buyer 
        _transfer(address(this), msg.sender, _id);

        idToNFt[_id].owner = payable(msg.sender);
        idToNFt[_id].listed = false;

        return true;
    }

    function updateRoyalty(uint256 _id , uint256 _royalty) nonReentrant public{
        require(idToNFt[_id].owner == payable(msg.sender), "Owner is not the caller");
        require(_royalty <= 50, "Royalty Cannot be Greater than 50%");
        idToNFt[_id].royalty = _royalty;
    } 



    // View Functions 

     // fetching all the nfts of a user
    function fetchMYNFTs(address  _address) public view returns(NFTTOKEN[] memory){
        uint256 nftcount = _tokenIds;
        uint256 currentIndex = 0;

        NFTTOKEN[] memory nfts = new NFTTOKEN[](nftcount);

        for(uint256  i = 0 ; i < nftcount ; i++){
            if(idToNFt[i+1].owner == payable(_address)){
                uint256 currrentId = i + 1 ;

                NFTTOKEN storage currentNFT = idToNFt[currrentId];
                nfts[currentIndex] = currentNFT;
                currentIndex += 1 ;
            }
        }
        return nfts;
    }

    // fetching only  the listed  nfts of a user
      function fetchMYListedNFTs(address  _address) public view returns(NFTTOKEN[] memory){
        uint256 nftcount = _tokenIds;
        uint256 currentIndex = 0;

        NFTTOKEN[] memory nfts = new NFTTOKEN[](nftcount);

        for(uint256  i = 0 ; i < nftcount ; i++){
            if(idToNFt[i+1].owner == payable(_address) && idToNFt[i+1].listed == true  ){
                uint256 currrentId = i + 1 ;

                NFTTOKEN storage currentNFT = idToNFt[currrentId];
                nfts[currentIndex] = currentNFT;
                currentIndex += 1 ;
            }
        }
        return nfts;
    }

       // fetching all nfts data
    function fetchALLNFTs() public view returns(NFTTOKEN[] memory){
        uint256 nftcount = _tokenIds;
        uint256 currentIndex = 0;

        NFTTOKEN[] memory nfts = new NFTTOKEN[](nftcount);

        for(uint256  i = 0 ; i < nftcount ; i++){
                uint256 currrentId = i + 1 ;
                NFTTOKEN storage currentNFT = idToNFt[currrentId];
                nfts[currentIndex] = currentNFT;
                currentIndex += 1 ;
            
        }
        return nfts;
    }


     // fetching only  the listed  nfts 
      function fetchListedNFTs() public view returns(NFTTOKEN[] memory){
        uint256 nftcount = _tokenIds;
        uint256 currentIndex = 0;

        NFTTOKEN[] memory nfts = new NFTTOKEN[](nftcount);

        for(uint256  i = 0 ; i < nftcount ; i++){
            if(idToNFt[i+1].listed == true  ){
                uint256 currrentId = i + 1 ;

                NFTTOKEN storage currentNFT = idToNFt[currrentId];
                nfts[currentIndex] = currentNFT;
                currentIndex += 1 ;
            }
        }
        return nfts;
    }


     function fetchCreatorNFTs(address  _address) public view returns(NFTTOKEN[] memory){
        uint256 nftcount = _tokenIds;
        uint256 currentIndex = 0;

        NFTTOKEN[] memory nfts = new NFTTOKEN[](nftcount);

        for(uint256  i = 0 ; i < nftcount ; i++){
            if(idToNFt[i+1].creator == _address){
                uint256 currrentId = i + 1 ;

                NFTTOKEN storage currentNFT = idToNFt[currrentId];
                nfts[currentIndex] = currentNFT;
                currentIndex += 1 ;
            }
        }
        return nfts;
    }


    // Return Each NFt By thier token Id
    function getNFTInfobyId(uint256 id_) public  view returns(NFTTOKEN memory){
        return idToNFt[id_];
    }
    

    function getTokenURIbyId(uint256 _id) public view returns(string memory ){
        return tokenURI(_id);
    }

    receive() external payable {}

    fallback() external payable {}


    function withdraw(uint256 amount) payable public onlyOwner {
        payable(msg.sender).transfer(amount);
    }


}