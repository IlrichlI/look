import type {AxiosInstance} from 'axios'
import {useSerializeURLs, type TServices} from '@rich/http'
const rolesApiRoutes = useSerializeURLs('/rich/web',{
  roles: '/'
})

const rolesService = ((axios: AxiosInstance) => ({
  roles: (payload: object) => axios.post(rolesApiRoutes.roles, payload)  
})) as unknown as TServices

export { rolesService }