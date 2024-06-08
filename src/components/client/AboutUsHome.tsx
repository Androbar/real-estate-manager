'use client'
import { BsGraphUp, BsHouseFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import {
  Box,
  Text,
  Flex,
  Heading,
  useBreakpointValue,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { MdFamilyRestroom } from 'react-icons/md'

const Counter = ({
  endValue,
  duration = 2000,
}: {
  endValue: number
  duration?: number
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = endValue
    if (start === end) return

    const incrementTime = (duration / end) * 2

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start === end) clearInterval(timer)
    }, incrementTime)

    return () => {
      clearInterval(timer)
    }
  }, [endValue])

  return (
    <Text fontSize="4xl" fontWeight="bold">
      {count}
    </Text>
  )
}

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const maxWidth = useBreakpointValue({ base: '100%', lg: '6xl' })

  return (
    <Flex ref={ref} w="full" direction={{ base: 'column', lg: 'row' }}>
      <Box flex="1" bg="gray.100" p={8}>
        <Heading as="h2" size="xl" mb={4}>
          Why We&apos;re Great
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
          nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
          odio, sollicitudin vel erat vel, interdum mattis neque.
        </Text>
      </Box>
      <Box flex="1" maxW={maxWidth} p={8} bg="gray.50">
        <Flex direction="column" align="center" justify="center" height="100%">
          {inView && (
            <HStack gap={6}>
              <VStack maxW={'33%'}>
                <BsHouseFill size={40} />
                <Counter endValue={100} />
                <Text textAlign={'center'}>
                  Properties sold in the last year
                </Text>
              </VStack>
              <VStack>
                <BsGraphUp size={40} />
                <Counter endValue={54} />
                <Text textAlign={'center'}>Increase in lead conversions</Text>
              </VStack>
              <VStack>
                <MdFamilyRestroom size={40} />
                <Counter endValue={300} />
                <Text textAlign={'center'}>Families found they dream home</Text>
              </VStack>
            </HStack>
          )}
        </Flex>
      </Box>
    </Flex>
  )
}

export default AboutUs
