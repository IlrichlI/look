import type {AxiosInstance} from 'axios'
import {useSerializeURLs, type TServices} from '@rich/http'
const loginApiRoutes = useSerializeURLs('/rich/web',{
  login: '/login'
})

const loginService = ((axios: AxiosInstance) => ({
  login: (payload: object) => axios.post(loginApiRoutes.login, payload)  
})) as unknown as TServices

export { loginService }