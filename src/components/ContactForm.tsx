'use client'

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  CloseButton,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useContactForm } from '@/hooks/useContactForm'
import { useEffect, useState } from 'react'

const ALERT_STATUS = {
  success: {
    status: 'success',
    title: 'Success!',
    description: 'Your message has been sent successfully.',
  },
  error: {
    status: 'error',
    title: 'Error!',
    description: 'Your message has not been sent.',
  },
} as const
export const ContactForm = ({ propertyId }: { propertyId: number }) => {
  const [alert, setAlert] = useState<'success' | 'error'>('success')
  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors },
  } = useForm<IContactForm>()
  const mutation = useContactForm()

  const { isOpen: isVisible, onClose, onOpen } = useDisclosure()

  useEffect(() => {
    mutation.isSuccess && setAlert('success')
    mutation.isError && setAlert('error')
  }, [mutation.isSuccess, mutation.isError])

  const onSubmit = async (data: IContactForm) => {
    await mutation.mutateAsync({ ...data, propertyId })
    resetForm()
    onOpen()
  }

  const handleClose = () => {
    onClose()
    mutation.reset()
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
            <Input
              id="name"
              disabled={mutation.isLoading}
              placeholder="Name"
              {...register('name', { required: 'Name is required' })}
            />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              disabled={mutation.isLoading}
              placeholder="Email"
              {...register('email', { required: 'Email is required' })}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.phone}>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input
              id="phone"
              disabled={mutation.isLoading}
              placeholder="Phone (optional)"
              {...register('phone')}
            />
            <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.message}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              id="message"
              disabled={mutation.isLoading}
              placeholder="Message"
              {...register('message', { required: 'Message is required' })}
            />
            <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
          </FormControl>
          {isVisible && (
            <Alert status={ALERT_STATUS[alert].status} mt={4}>
              <AlertIcon />
              <Box>
                <AlertTitle>{ALERT_STATUS[alert].title}</AlertTitle>
                <AlertDescription>
                  {ALERT_STATUS[alert].description}
                </AlertDescription>
              </Box>
              <CloseButton
                alignSelf="flex-start"
                position="relative"
                right={-1}
                top={-1}
                onClick={handleClose}
              />
            </Alert>
          )}
          <Button
            mt={4}
            colorScheme="blue"
            type="submit"
            w={'150px'}
            isDisabled={mutation.isLoading}
          >
            {mutation.isLoading ? <Spinner /> : 'Submit'}
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}

export interface IContactForm {
  name: string
  email: string
  phone?: string
  message: string
}
