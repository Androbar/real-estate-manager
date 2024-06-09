'use client'

import { type FieldValues, useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Button, Input, FormControl, FormLabel } from '@chakra-ui/react'

const Login = () => {
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
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" {...register('email')} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register('password')} />
        </FormControl>
        <Button type="submit">Login</Button>
      </form>
      <Button onClick={async () => await signIn('google')}>
        Login with Google
      </Button>
      {error && <p>{error}</p>}
    </Box>
  )
}

export default Login
