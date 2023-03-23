import type {AxiosInstance} from 'axios'
import {useSerializeURLs, type TServices} from '@rich/http'
const rolesApiRoutes = useSerializeURLs('/rich/web/role',{
  roles: '/search'
})

const rolesService = ((axios: AxiosInstance) => ({
  roles: (payload: object) => axios.get(rolesApiRoutes.roles, payload)  
})) as unknown as TServices

export { rolesService }