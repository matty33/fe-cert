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

export default function Home() {
  return (
    <ChakraProvider>
      <Navbar/>
      <Hero/>
      <Service/>
      <NFTSlider/>
      <Title heading="Browse by Category" paragraph={"Explore the NFTs in the most featured categories"} />
      <Subscribe/>
      <Footer/>
      
    </ChakraProvider>
 
  )
}
