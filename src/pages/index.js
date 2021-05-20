import { useAuthState, useAuthDispatch } from '../context/auth'

export default function IndexPage() {
  const { isAuthenticated, user } = useAuthState()
  const { login, register, createUser, logout } = useAuthDispatch()

  return (
    <>
      {isAuthenticated ? (
        <>
          <p>Hello {user.name}</p>
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <>
          <button
            onClick={() =>
              login({
                email: 'j@dfj.com2',
                password: 'abc123',
              })
            }
          >
            Login
          </button>
          <button
            onClick={() =>
              register({
                name: 'yoyoyoyoyoh',
                email: 'j@dfj.com2',
                password: 'abc123',
              })
            }
          >
            Register
          </button>
        </>
      )}
    </>
  )
}
