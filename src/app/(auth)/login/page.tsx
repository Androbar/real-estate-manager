import Login from './page.client'

export default function Page() {
  const signupDisabled = process.env.SIGNUP_ENABLED !== 'true'
  return <Login signupDisabled={signupDisabled} />
}
