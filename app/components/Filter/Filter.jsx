"use client"
import React , {useState} from 'react'

import Style from "./filter.module.css"

import { FaFilter , FaAngleDown , FaAngleUp , FaWallet , FaMusic , FaVideo , FaImages , FaUserAlt, FaUser } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdVerified } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'

const Filter = () => {

  const [filter , setfilter] = useState(true);
  const [image , setimage] = useState(true);
  const [video , setvideo] = useState(true);
  const [music , setmusic] = useState(true);


  const openFilterOptions = () => {
    if(!filter){
      setfilter(true)
    }else{
      setfilter(false)
    }
  }

  const openImage = () =>{
    if(!image){
      setimage(true)
    }else{
      setimage(false)
    }
  }

  
  const openVideo = () =>{
    if(!video){
      setvideo(true)
    }else{
      setvideo(false)
    }
  }
  
  const openMusic = () =>{
    if(!music){
      setmusic(true)
    }else{
      setmusic(false)
    }
  }


  return (
    <div className={Style.FILTER}>
      <div className={Style.FILTER_BOX}>
        <div className={Style.FILTER_BOX_LEFT} >
          <button onClick={() => {}}>NFTs</button>
          <button onClick={() => {}}>Arts</button>
          <button onClick={() => {}}>Music</button>
          <button onClick={() => {}}>Sports</button>
          <button onClick={() => {}}>Photography</button>
        </div>

        <div className={Style.FILTER_BOX_RIGHT}>
          <div className={Style.FILTER_BOX_RIGHT_BOX} onClick={() => openFilterOptions()}>
            <FaFilter/>
            {filter ? <FaAngleDown/> : <FaAngleUp/>}
          </div>
        </div>
      </div>

      {
        filter && (
          <div className={Style.FILTER_BOX_ITEMS}>
            <div className={Style.FILTER_BOX_ITEMS_BOX}>
              <div className={Style.FILTER_BOX_ITEMS_BOX_ITEM}>
                <FaWallet/> <span>0.01 ETH - 10 ETH</span>
                <AiFillCloseCircle/>
              </div>
            </div>

            <div className={Style.FILTER_BOX_ITEMS_BOX}>
            <div className={Style.FILTER_BOX_ITEMS_BOX_ITEM_TX} onClick={() => openImage()}>
                <FaImages/> <span>Images</span>
               {image ? <AiFillCloseCircle/>: <TiTick/>}
              </div>
            </div>

            <div className={Style.FILTER_BOX_ITEMS_BOX}>
              <div className={Style.FILTER_BOX_ITEMS_BOX_ITEM_TX} onClick={() => openVideo()}>
                <FaVideo/> <small>Videos</small>
                {video ? <AiFillCloseCircle/> : <TiTick/>}
              </div>
            </div>

            <div className={Style.FILTER_BOX_ITEMS_BOX}>
              <div className={Style.FILTER_BOX_ITEMS_BOX_ITEM_TX} onClick={() => openMusic()}>
                <FaMusic/> <small>Music</small>
                {music ? <AiFillCloseCircle/> : <TiTick/>}
              </div>
            </div>


            <div className={Style.FILTER_BOX_ITEMS_BOX}>
              <div className={Style.FILTER_BOX_ITEMS_BOX_ITEM}>
                <FaUserAlt/> <small>Verified</small>
                <MdVerified/>
              </div>
            </div>




          </div>
        )
      }
    </div>
  )
}

export default Filter