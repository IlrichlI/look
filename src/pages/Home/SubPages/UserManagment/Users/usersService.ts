import type {AxiosInstance} from 'axios'
import {useSerializeURLs, type TServices} from '@rich/http'
const usersApiRoutes = useSerializeURLs('/rich/web/user',{
  users: '/search'
})

const usersService = ((axios: AxiosInstance) => ({
  users: (payload: object) => axios.get(usersApiRoutes.users, payload)  
})) as unknown as TServices

export { usersService }