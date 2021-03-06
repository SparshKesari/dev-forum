import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { useAuthState, useAuthDispatch } from '../context/auth'

import Layout from '../components/Layout'

export default function RegisterPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuthState()
  const { login } = useAuthDispatch()
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
    setError,
  } = useForm()
  {
    defaultValues: {
      save_last_seen: true
    }
  }
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated])

  if (isAuthenticated) return null

  const onSubmit = async ({ email, password, save_last_seen }) => {
    try {
      await createUser({ email, password, save_last_seen })
      router.push('/')
    } catch ({ message }) {
      setError('email', {
        type: 'manual',
        message,
      })
    }
  }

  return (
    <>
      <Layout>
        <h1 className='text-3xl'>Login into your Account</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type='email'
              {...login('email', {
                required: 'You must provide a email.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'You must provide a valid email',
                },
              })}
              placeholder='Your email'
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div>
            <input
              type='password'
              id='password'
              {...login('password', {
                required: 'Enter your  password.',
              })}
              placeholder='Enter your  password.'
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div>
            <label htmlFor='save_last_seen'>
              <input
                type='checkbox'
                id='save_last_seen'
                {...login('save_last_seen')}
              />
              Show as online to other users
            </label>
          </div>
          <div>
            <button type='submit' disabled={isSubmitting}>
              Login
            </button>
          </div>
        </form>
      </Layout>
    </>
  )
}
