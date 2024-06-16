import { type NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prismaClient'

import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  if (process.env.SIGNUP_ENABLED !== 'true') {
    return NextResponse.json({ error: 'Signup is disabled' }, { status: 403 })
  }
  try {
    const body: {
      email: string
      password: string
      name: string
    } = await request.json()
    const { email, password, name } = body
    const hashedPassword = bcrypt.hashSync(password, 10)
    const emailExists = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (emailExists) {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 400 },
      )
    }

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    })

    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    } else {
      return NextResponse.json(
        { error: 'An unknown error occurred' },
        { status: 500 },
      )
    }
  }
}
