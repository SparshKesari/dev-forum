//1. Login form

//2. register form post request

//3. return error

//4. if sucessful redirect to root

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { useAuthState, useAuthDispatch } from '../context/auth'

import Layout from '../components/Layout'

export default function RegisterPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuthState()
  const { register: createUser } = useAuthDispatch()
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

  const onSubmit = async ({ name, email, password, save_last_seen }) => {
    try {
      await createUser({ name, email, password, save_last_seen })
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
        <h1 className='text-3xl'>Create an account</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type='text'
              {...register('name', {
                required: 'You must provide a name.',
              })}
              placeholder='Your name'
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div>
            <input
              type='email'
              {...register('email', {
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
              {...register('password', {
                required: 'You must provide a password.',
                minLength: {
                  message: 'Your password must be at least 6 characters',
                  value: 6,
                },
              })}
              placeholder='Choose a password'
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div>
            <label htmlFor='save_last_seen'>
              <input
                type='checkbox'
                id='save_last_seen'
                {...register('save_last_seen')}
              />
              Show as online to other users
            </label>
          </div>
          <div>
            <button type='submit' disabled={isSubmitting}>
              Create account
            </button>
          </div>
        </form>
      </Layout>
    </>
  )
}
