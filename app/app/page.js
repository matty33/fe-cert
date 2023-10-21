import Image from 'next/image'
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from '@/components/Navbar/Navbar'

export default function Home() {
  return (
    <ChakraProvider>
      <Navbar/>
    </ChakraProvider>
 
  )
}
