import { useRouter } from 'vue-router'

type TUseAuthProps = {
  mutate: (payload: {
    email: string
    password: string
  }) => Promise<{ token: string; user: { name: string; email: string } }>
  authenticateAppStatus: () => void
}

export const useAuth = ({ mutate, authenticateAppStatus }: TUseAuthProps) => {
  const router = useRouter()

  const login = (data: never) => {
    router.push({ path: '/dashboard' })
    localStorage.setItem('rich-user_name', String('test'))
    localStorage.setItem('rich-user_email', String('test@test.com'))
    localStorage.setItem('token', String('res.token'))
    authenticateAppStatus()
  }

  return {
    login
  }
}

export const logout = () => {
  localStorage.removeItem('rich-user_name')
  localStorage.removeItem('rich-user_email')
  localStorage.removeItem('rich-token')
  window.location.replace(`${window.location}/login`)
  window.location.reload()
}
