"use client"
import React , {useState} from 'react'
import Image from 'next/image'
import { AiFillHeart , AiOutlineHeart } from 'react-icons/ai'
import { TbPlayerPause, TbPlayerPlay } from 'react-icons/tb'

import Style from "./Audiocard.module.css"
import images from "../../../img"

const AudioCard = () => {

  const [like , setlike] = useState(false)
  const [play , setplay] = useState(false)

  const likeNFT = () => {
    if(!like){
      setlike(true)
    }else{
      setlike(false)
    }
  }

  const musicPlayer = () =>{
    if(!play){
      setplay(true)
    }else{
      setplay(false)
    }
  }

  return (
    <div className={Style.AudioCard}>

      <div className={Style.AudioCard_box}>

        <div className={Style.AudioCard_box_like_time}>
          <div className={Style.AudioCard_box_like} onClick={() => likeNFT()}>
            {
              like ? 
              (
                <AiFillHeart className={Style.AudioCard_box_like_icon} />
              ):
              (
                <AiOutlineHeart className={Style.AudioCard_box_like_icon} />
              )
            }

            <span>24</span>
          </div>

          <div className={Style.AudioCard_box_time}>
            <div className={Style.AudioCard_box_time_remaining}>
              <small>Remaing time</small>
              <h5>3h : 15min: 20s</h5>
            </div>

          </div>

        </div>


        <div className={Style.AudioCard_box_Player} >
          <Image src={images.musiceWave} width={200} alt='music pic' />
        <div className={Style.AudioCard_box_musicPlayer} onClick={() => musicPlayer()}>
          {
            play ? (
              <div className={Style.AudioCard_box_musicPlayer_icon}>
                <TbPlayerPause/>

              </div>
            ):(
              <div className={Style.AudioCard_box_musicPlayer_icon}>
              <TbPlayerPlay/>

            </div>
            )
          }

        </div>
        </div>


      </div>

          <div  className={Style.AudioCard_box_details} >
            <div className={Style.AudioCard_box_details_info}>
              <h4>NFT music #82849</h4>
              <div className={Style.AudioCard_box_details_info_price}   >
                <small>Price</small>
                <p>9 ETH</p>

              </div>
            </div>

            <div className={Style.AudioCard_box_details_info_stock} >
              <small>24 in stock</small>

            </div>

          </div>

          <div className={Style.AudioCard_box_img} >
            <Image src={images.creatorbackground10} alt='Images ' width={500} height={500} />

          </div>
    </div>
  )
}

export default AudioCard