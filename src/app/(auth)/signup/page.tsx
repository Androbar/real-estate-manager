import Signup from './page.client'

export default function Page() {
  const signupDisabled = process.env.SIGNUP_ENABLED !== 'true'
  if (signupDisabled) {
    return <div>Signup is disabled</div>
  }
  return <Signup />
}
