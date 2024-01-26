'use client'

import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react"
import { useForm } from "react-hook-form";

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IContactForm>();

  return (
    <Box w={'100%'}>
      <Heading size={'lg'}>Contact Form</Heading>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" placeholder="Name" {...register('name', { required: 'Name is required' })} />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" placeholder="Email" {...register('email', { required: 'Email is required' })} />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.phone}>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input id="phone" placeholder="Phone (optional)" {...register('phone')} />
          <FormErrorMessage>
            {errors.phone && errors.phone.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.message}>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea id="message" placeholder="Message" {...register('message', { required: 'Message is required' })} />
          <FormErrorMessage>
            {errors.message && errors.message.message}
          </FormErrorMessage>
        </FormControl>

        <Button mt={4} colorScheme="blue" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  )
}

interface IContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
}