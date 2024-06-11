import type { Session, User } from 'next-auth'

export interface ExtendedUser extends User {
  role: string
}

export interface ExtendedSession extends Session {
  user: {
    id: string
    role: string
  } & Session['user']
}
