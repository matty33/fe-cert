'use client';
import React , {useState} from 'react'
import Image from 'next/image';

import { AiFillHeart , AiOutlineHeart } from 'react-icons/ai'
import { TbPlayerPause, TbPlayerPlay } from 'react-icons/tb'

import Style from "./audiocardsmall.module.css"
import images from "../../../img";



const AudiocardSmall = () => {

  const [play , setplay] = useState(false)


  const playMusic = () => {
    if(!play){
      setplay(true)
    }else{
      setplay(false)
    }
  }

  

  return (
    <div className={Style.AudiocardSmall}>
      <div className={Style.AudiocardSmall_box}>
        <Image src={images.creatorbackground3} alt='music' width={100} height={100} 
          className={Style.AudiocardSmall_box_img}
        />
      <div className={Style.AudiocardSmall_box_info}>
        <h4>NFT Music</h4>
        <div className={Style.AudiocardSmall_box_info_box}>
          {/* <LikeProfile /> */}
          <div className={Style.AudiocardSmall_box_info_box_price}>
            <small>Price</small>
            <p>78 ETH</p>
          </div>
        </div>
      </div>

      <div className={Style.AudiocardSmall_box_playbtn} onClick={() => playMusic()}>
        {
          play ? (
            <TbPlayerPause/>
          ): (
            <TbPlayerPlay/>
          )
        }


      </div>
      </div>
    </div>
  )
}

export default AudiocardSmall