'use client'
import React from 'react'

// Internal Imports
import Style from "./collection.module.css"
import images from "../../img";

import Banner from '@/collectionPage/Banner/Banner';
import CollectionProfile from '@/collectionPage/CollectionProfile/CollectionProfile';
import Slider from '@/components/Slider/Slider';
import Filter from '@/components/Filter/Filter';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';



const CollectionPage = () => {
  return (
  
  <>
  <Navbar/>
   <div className={Style.collection} >
        <Banner bannerImage={images.creatorbackground1} />
        <CollectionProfile/>
    </div>

    <Footer/>
  </>
   
  )
}

export default CollectionPage