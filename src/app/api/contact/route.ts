import prisma from "@/lib/prismaClient";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, phone, message, propertyId } = await request.json()
  // validate existance of property id
  const res = await prisma.contact.create({
    data: {
      name: name,
      email: email,
      phone: phone,
      message: message,
      propertyId: propertyId,
    }
  })
  const data =  {'contactId': res.id}
  return Response.json({ data })
}