"use client"

import React from 'react'

import Style from "./Audiolive.module.css"
import AudioCard from './AudioCard/AudioCard'
import AudiocardSmall from './AudioCardSmall/AudiocardSmall'

const Audiolive = () => {
  return (
    <div className={Style.audiolive}>
        <div  className={Style.audiolive_box}>
            <div  className={Style.audiolive_box_left}>
                <AudioCard/>
                <AudioCard/>
                
            </div>

            <div  className={Style.audiolive_box_right}>

                <AudiocardSmall/> 
                <AudiocardSmall/> 
                <AudiocardSmall/> 


            </div>


        </div>
    </div>
  )
}

export default Audiolive