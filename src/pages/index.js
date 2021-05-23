import Link from 'next/link'
import { useAuthState, useAuthDispatch } from '../context/auth'
import Layout from '../components/Layout'

export default function IndexPage() {
  const { isAuthenticated, user } = useAuthState()
  const { logout } = useAuthDispatch()

  return (
    <>
      <Layout>hi</Layout>
    </>
  )
}
