import type {AxiosInstance} from 'axios'
import {useSerializeURLs, type TServices} from '@rich/http'
const usersApiRoutes = useSerializeURLs('/rich/web',{
  users: '/'
})

const usersService = ((axios: AxiosInstance) => ({
  users: (payload: object) => axios.post(usersApiRoutes.users, payload)  
})) as unknown as TServices

export { usersService }