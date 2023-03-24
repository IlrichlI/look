import type {AxiosInstance} from 'axios'
import {useSerializeURLs, type TServices} from '@rich/http'
const loginApiRoutes = useSerializeURLs('/rich/web',{
  login: '/login',
  register: '/register',
})

const loginService = ((axios: AxiosInstance) => ({
  login: (payload: object) => axios.post(loginApiRoutes.login, payload),
  register: (payload: object) => axios.post(loginApiRoutes.register, payload),
})) as unknown as TServices

export { loginService }