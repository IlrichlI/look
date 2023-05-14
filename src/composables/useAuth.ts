import { useRouter } from 'vue-router'

type TUseAuthProps = {
  mutate: (payload: {
    email: string
    password: string
  }) => Promise<{ token: string; user: { name: string; email: string } }>
  authenticatedAppStatus: () => void
}

export const useAuth = ({ mutate, authenticatedAppStatus }: TUseAuthProps) => {
  const router = useRouter()

  const login = async (data: never) => {
    const res = await mutate(data)

    if (res !== undefined) {
      localStorage.setItem('rich-user_name', String(res.user.name))
      localStorage.setItem('rich-user_email', String(res.user.email))
      localStorage.setItem('rich-token', String(res.token))
      authenticatedAppStatus()

      await router.push('/')
    }
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
