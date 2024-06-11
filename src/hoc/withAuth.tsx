// app/hocs/withAuth.tsx
import { useRouter } from 'next/navigation'
import { type FC, useEffect } from 'react'
import type { Session } from 'next-auth'

interface WithAuthProps {
  session: Session | null
}

const withAuth = <P extends object>(WrappedComponent: FC<P>) => {
  const Wrapper: FC<P & WithAuthProps> = props => {
    const { session, ...restProps } = props as WithAuthProps
    const router = useRouter()

    useEffect(() => {
      if (!session) {
        router.replace('/404')
      }
    }, [session, router])

    if (!session) {
      return <div>Loading...</div> // Optional: Add a loading spinner
    }

    return <WrappedComponent {...(restProps as P)} />
  }

  return Wrapper
}

export default withAuth
