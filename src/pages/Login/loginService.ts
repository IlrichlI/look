import type {AxiosInstance} from 'axios'
import {useSerializeURLs} from '@rich/http'
const loginApiRoutes = useSerializeURLs('/rich/web',{
  login: '/login'
})

const loginService = (axios: AxiosInstance) => ({
  login: (payload: object) => axios.post(loginApiRoutes.login, payload)  
})

export { loginService }