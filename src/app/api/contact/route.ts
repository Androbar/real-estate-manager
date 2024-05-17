import prisma from '@/lib/prismaClient'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const { name, email, phone, message, propertyId } = await request.json()
  // validate existance of property id
  const res = await prisma.contact.create({
    data: {
      name,
      email,
      phone,
      message,
      propertyId,
    },
  })
  const data = { contactId: res.id }
  return Response.json({ data })
}
