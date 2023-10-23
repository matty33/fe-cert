import Image from 'next/image'
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <ChakraProvider>
      <Navbar/>
      <Footer/>
    </ChakraProvider>
 
  )
}
