"use client"
import React from 'react'

// INTERNAL IMPORTS 
import Image from 'next/image'
import Style from "./Hero.module.css"
import Button from '../Button/Button'
import images from "../../img"



const Hero = () => {
  return (
    <div className={Style.HEROSECTION} >

      <div className={Style.HEROSECTION_BOX}>

        <div className={Style.HEROSECTION_BOX_LEFT}>
            <h1>Discover , Collect , and sell NFTs</h1>
            <p>
              Discover the most outstanding NFTs in all topics of your NFTs and trade them.
            </p>
            <Button btnName="Start your search"></Button>
        </div>

      <div className={Style.HEROSECTION_BOX_RIGHT}>
          <Image src={images.hero} alt='Hero Section Image' width={600} height={600} />

      </div>

      </div>

    </div>
  )
}

export default Hero