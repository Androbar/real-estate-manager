import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Box,
  Text,
  Flex,
} from '@chakra-ui/react'
import { useState } from 'react'

function NewsletterFooter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [emailError, setEmailError] = useState('')
  const onHandleSubmitClick = () => {
    if (isValidEmail(email)) {
      onHandleSubmit()
    } else {
      setEmailError('Please enter a valid email')
    }
  }
  const onHandleSubmit = () => {
    setEmailError('')
    setIsSubmitted(true)
  }

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  return (
    <Box bg="gray.800" p={16}>
      <Container maxW={'6xl'} color={'gray.300'}>
        <Flex
          align={'flex-start'}
          gap={6}
          alignItems={'flex-start'}
          direction={{ base: 'column', lg: 'row' }}
        >
          <VStack gap={0} align={'flex-start'} flex={'2'}>
            <Heading as={'h4'} size={'lg'} p={0} m={0}>
              Subscribe to our newsletter
            </Heading>
            <Text p={0} m={0}>
              Get notified about new features and updates! By subscribing to our
              newsletter, you&apos;ll receive the latest news, exclusive offers,
              and valuable insights directly in your inbox. Stay ahead with our
              expert tips on the real estate market, property investment
              strategies, and more. Don&apos;t miss out on important
              announcements and special events that can help you make informed
              decisions and stay competitive in the market. Join our community
              and be the first to know about what&apos;s coming next.
            </Text>
          </VStack>
          <VStack flex={'1'} pt={10} width={'100%'}>
            <Input
              placeholder={'Your email address'}
              value={email}
              onChange={e => {
                setEmail(e.target.value)
              }}
            />
            {emailError && <Text color={'red.500'}>{emailError}</Text>}
            {isSubmitted ? (
              <Text color={'green.500'}>
                Thank you for subscribing to our newsletter!
              </Text>
            ) : (
              <Button
                w={'100%'}
                colorScheme={'blue'}
                onClick={onHandleSubmitClick}
              >
                Subscribe
              </Button>
            )}
          </VStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default NewsletterFooter
