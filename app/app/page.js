import Image from 'next/image'
import { ChakraProvider } from '@chakra-ui/react'


// INTERNAL IMPORT 
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/HeroSection/Hero'
import Service from '@/components/Service/Service'
import NFTSlider from '@/components/BigNFTSlider/NFTSlider'
import Subscribe from '@/components/SubscribeEmail/Subscribe'
import Title from '@/components/Title/Title'
import Category from '@/components/Category/Category'
import Filter from '@/components/Filter/Filter'

export default function Home() {
  return (
    <ChakraProvider>
      <Navbar/>
      <Hero/>
      <Service/>
      <NFTSlider/>
      <Title heading="Featured NFTs" paragraph={"Discover the most outstanding NFTs in all topics of life"} />
      <Filter/>
      <Title heading="Browse by Category" paragraph={"Explore the NFTs in the most featured categories"} />
      <Category/>
      <Subscribe/>
      <Footer/>
      
    </ChakraProvider>
 
  )
}
