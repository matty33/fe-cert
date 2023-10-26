"use client"
import React, { useState } from 'react'
import Style from "./Collection.module.css"
import { BsFillAlarmFill , BsCalendarDate , BsFillCalendarDateFill} from 'react-icons/bs'
import Day from './DaysComponent/Day'
import { Elsie_Swash_Caps } from 'next/font/google'

const Collection = () => {

  const CardArray = [1,2,3,4,5,6]
  const newsArray = [1,2,3,4,5,6,7,8]
  const followingArray = [1,2,3,4,5]

  const [popular , setpopular] = useState(false);
  const [news , setnews] = useState(false);
  const [follower , setfollower] = useState(false);


  const openPopular = () => {
    if(!popular){
      setpopular(true)
      setnews(false)
      setfollower(false)
    }
  }

  
  const openNews = () => {
    if(!news){
      setnews(true)
      setpopular(false)
      setfollower(false)
    }
  }
  
  const openFollower = () => {
    if(!follower){
      setfollower(true)
      setpopular(false)
      setnews(false)
    }
  }

  

  return (
    <div className={Style.collection}>

      <div  className={Style.collection_title}>

        <h2>Top List Creators</h2>

        <div  className={Style.collection_collections}>

          <div  className={Style.collection_collections_btn}>

            <button onClick={() => openPopular()}>
              <BsFillAlarmFill className={Style.icon} /> <span>Last</span>  24 Hours
            </button>

            <button onClick={() => openFollower()}>
              <BsCalendarDate/> <span>Last</span> 7 Days
            </button>

            <button onClick={() => openNews()}>
              <BsFillCalendarDateFill/> <span>Last</span> 30 Days
            </button>

          </div>

        </div>

      </div>

      {
        popular && (
          <div className={Style.collection_box}>
            {CardArray.map((el , i) => (
              <Day key={i+1} />
            ))}

          </div>
        )
      }

     {
        follower && (
          <div className={Style.collection_box}>
            {followingArray.map((el , i) => (
              <Day key={i+1} />
            ))}

          </div>
        )
      }

      {
        news && (
          <div className={Style.collection_box}>
            {newsArray.map((el , i) => (
              <Day key={i+1} />
            ))}

          </div>
        )
      }


    </div>
  )
}

export default Collection