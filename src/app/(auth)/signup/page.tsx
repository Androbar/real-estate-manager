'use client'

import { type FieldValues, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
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
} from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'

const Signup = () => {
  const { register, handleSubmit } = useForm()
  const router = useRouter()

  const onSubmit = async (data: FieldValues) => {
    await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        name: data.name,
      }),
    })

    router.push('/login')
  }

  return (
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
          Sign Up
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" {...register('name')} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" {...register('email')} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register('password')} />
            </FormControl>
            <Button type="submit" colorScheme="teal" w="full">
              Sign Up
            </Button>
          </VStack>
        </form>
        <Text mt={4} textAlign="center">
          Already have an account?{' '}
          <Link as={NextLink} href="/login" color="teal.500">
            Login
          </Link>
        </Text>
      </Box>
    </Center>
  )
}

export default Signup
