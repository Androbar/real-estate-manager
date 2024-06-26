import type { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@/lib/prismaClient' // Make sure you have a prisma client setup
import bcrypt from 'bcryptjs'
import type { ExtendedSession, ExtendedUser } from '@/types/auth'
import type { Provider } from 'next-auth/providers/index'

const providers: Provider[] = [
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      email: { label: 'Email', type: 'email' },
      password: { label: 'Password', type: 'password' },
    },
    async authorize(credentials, req) {
      if (!credentials?.email || !credentials?.password) {
        return null
      }
      const user = await prisma.user.findUnique({
        where: { email: credentials.email },
      })
      if (!user) {
        console.log('User not found')
        return null
      }

      const isValidPassword = bcrypt.compareSync(
        credentials.password,
        user.password || '',
      )
      if (!isValidPassword) {
        console.log('Invalid password')
        return null
      }

      console.log('User authenticated successfully:', user)
      return {
        id: user.id.toString(),
        email: user.email,
        password: user.password,
        name: user.name,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }
    },
  }),
]
if (process.env.SIGNUP_ENABLED === 'true') {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }) as Provider,
  )
}

const authOptions: AuthOptions = {
  providers,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = (user as ExtendedUser).role
      }
      return token
    },
    async session({ session, token }) {
      const extendedSession = session as ExtendedSession
      if (token) {
        extendedSession.user = extendedSession.user || {
          name: '',
          email: '',
          image: '',
        }
        extendedSession.user.id = token.id as string
        extendedSession.user.role = token.role as string
      }
      return session
    },
  },
}

export default authOptions
