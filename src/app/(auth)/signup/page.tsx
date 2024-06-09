'use client'

import { type FieldValues, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Box, Button, Input, FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'

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
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" {...register('name')} />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" {...register('email')} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register('password')} />
        </FormControl>
        <Button type="submit">Sign Up</Button>
      </form>
    </Box>
  )
}

export default Signup
