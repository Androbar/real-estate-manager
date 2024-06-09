'use client'

import {
  Box,
  Container,
  Flex,
  FormControl,
  Input,
  Textarea,
  Button,
  Text,
  HStack,
} from '@chakra-ui/react'

const ContactUs = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('submitted')
  }

  return (
    <Box bg="gray.800" py={16}>
      <Container maxW="6xl">
        <Flex gap={6}>
          <Box flex="1">
            <Text color="white" fontSize="xl" fontWeight="bold">
              We&apos;ll get back to you as soon as possible!
            </Text>
            <Text color="gray.300" fontSize="md">
              Our team of professionals is waiting for your inquiry. Complete
              the form and we will contact you shortly.
            </Text>
          </Box>
          <Box flex="1">
            <form onSubmit={onSubmit}>
              <HStack>
                <FormControl mb={4}>
                  <Input id="name" type="text" placeholder="Name" />
                </FormControl>
                <FormControl mb={4}>
                  <Input id="email" type="email" placeholder="Email" />
                </FormControl>
                <FormControl mb={4}>
                  <Input id="phone" type="tel" placeholder="Phone" />
                </FormControl>
              </HStack>
              <HStack>
                <FormControl mb={4}>
                  <Input id="subject" type="text" placeholder="Subject" />
                </FormControl>
                <FormControl mb={4}>
                  <Textarea id="message" placeholder="Your message" rows={1} />
                </FormControl>
              </HStack>
              <Button colorScheme="green" type="submit">
                Submit
              </Button>
            </form>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default ContactUs
