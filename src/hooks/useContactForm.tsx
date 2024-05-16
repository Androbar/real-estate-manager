'use client'

import { type IContactForm } from '@/components/ContactForm'
import { useMutation } from 'react-query'

export type ContactFormData = IContactForm & {
  propertyId: number
}

export const useContactForm = () => {
  return useMutation(async (formData: ContactFormData) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    return await response.json()
  })
}
