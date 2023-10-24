"use client"
import React , {useState} from 'react'

import Style from "./filter.module.css"

import { FaFilter , FaAngleDown , FaAngleUp , FaWallet , FaMusic , FaVideo , FaImages , FaUserAlt } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdVerified } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import { ST } from 'next/dist/shared/lib/utils'

const Filter = () => {

  const [filter , setfilter] = useState(true);
  const [image , setimage] = useState(true);
  const [video , setvideo] = useState(true);
  const [music , setmusic] = useState(true);


  return (
    <div className={Style.FILTER}>
      <div className={Style.FILTER_BOX}>
        <div className={Style.FILTER_BOX_LEFT} >
          <button onClick={() => {}}>NFTs</button>
          <button onClick={() => {}}>Arts</button>
          <button onClick={() => {}}>Music</button>
          <button onClick={() => {}}>NFTs</button>
          <button onClick={() => {}}>Photography</button>
        </div>

        <div className={Style.FILTER_BOX_RIGHT}>
          <div className={Style.FILTER_BOX_RIGHT_BOX} onClick={() => openFilterOptions()}>
            <FaFilter/>
            <span>Filter</span>{filter ? <FaAngleDown/> : <FaAngleUp/>}
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


          </div>
        )
      }
    </div>
  )
}

export default Filter