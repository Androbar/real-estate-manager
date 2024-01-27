'use client'

import { Box, Button, Card, CardBody, CardHeader, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import prisma from "@/lib/prismaClient";

export const ContactForm = ({propertyId}: {propertyId: number}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IContactForm>();

  const onSubmit = async (data: IContactForm) => {
    // have to move this to server component or api route,or connect trpc :)
    await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        propertyId: propertyId,
      }
    })
  }

  return (
    <Card w={'100%'} position={'sticky'} top={'18px'}>
      <CardHeader>
        <Heading size={'lg'}>Contact Form</Heading>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
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

      </CardBody>
    </Card>
  )
}

interface IContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
}