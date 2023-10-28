'use client'
import React , {useState , useEffect  , useRef} from 'react'

import { motion } from 'framer-motion';
import Image from 'next/image';

import { MdImageSearch } from 'react-icons/md'
import images from "../../../img";

import Style from "./Slidercard.module.css"

const SliderCard = () => {
  return (
    <motion.div className={Style.SliderCard}>

      <div className={Style.SliderCard_box}>
        <motion.div className={Style.SliderCard_box_img} >
          <Image className={Style.SliderCard_box_img_img} src={images.creatorbackground1} alt="slidercard img" width={500} height={300} objectFit='cover' />
        </motion.div>

      <div  className={Style.SliderCard_box_title} >
        <p>NFT Video #626</p>
        <div>
          <small>1 of 100</small>
        </div>
      </div>

      <div  className={Style.SliderCard_box_price} >
        <div  className={Style.SliderCard_box_price_box}>
          <small>Current Bid</small>
          <p>9 ETH</p>
        </div>

      <div  className={Style.SliderCard_box_price_time}>
        <small>Remaing Time</small>
        <p>9h: 6min : 9sec</p>

      </div>
      </div>

      </div>

    </motion.div>
    )
}

export default SliderCard