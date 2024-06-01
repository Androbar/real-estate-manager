'use client'

import { Box, Flex, Image } from '@chakra-ui/react'
import HeroFilters from './HeroFilters'

export function Hero() {
  return (
    <Flex w="100%" h="500px" position="relative">
      <Image
        src="/images/hero.jpg"
        alt="Hero Image"
        objectFit="cover"
        w="100%"
        h="100%"
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="blackAlpha.600"
      />
      <Box
        position="absolute"
        top={'70%'}
        left={'50%'}
        zIndex={10}
        overflow={'visible'}
        width={'25%'}
        transform={'translateX(-50%)'}
      >
        <HeroFilters />
      </Box>
    </Flex>
  )
}
