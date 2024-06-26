'use client'

import { type FieldValues, useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import NextLink from 'next/link'
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Heading,
  Text,
  Center,
  Link,
  Container,
} from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'

const Login = ({ signupDisabled }: { signupDisabled: boolean }) => {
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (data: FieldValues) => {
    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    })

    if (res && res.error) {
      setError(res.error)
    } else {
      router.push('/')
    }
  }

  return (
    <Container maxW={'6xl'}>
      <Center h="100vh">
        <Box
          maxW="md"
          w="full"
          p={8}
          borderWidth={1}
          borderRadius="lg"
          boxShadow="lg"
        >
          <Heading as="h1" size="xl" textAlign="center" mb={6}>
            Login
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" {...register('email')} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register('password')} />
              </FormControl>
              <Button type="submit" colorScheme="teal" w="full">
                Login
              </Button>
            </VStack>
          </form>
          {!signupDisabled && (
            <Button
              mt={4}
              w="full"
              colorScheme="blue"
              leftIcon={<FcGoogle />}
              onClick={async () => await signIn('google')}
            >
              Login with Google
            </Button>
          )}
          {error && (
            <Text color="red.500" mt={4}>
              {error}
            </Text>
          )}
          <Text mt={4} textAlign="center">
            Don&apos;t have an account?{' '}
            <Link as={NextLink} href="/signup" color="teal.500">
              Sign up
            </Link>
          </Text>
        </Box>
      </Center>
    </Container>
  )
}

export default Login
