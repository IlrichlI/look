import type {AxiosInstance} from 'axios'
import {useSerializeURLs, type TServices} from '@rich/http'

const rolesApiRoutes = useSerializeURLs('/rich/web/role',{
  roles: '/search',
  create: '/create',
  update: '/update',
  delete: '/delete',
})

const rolesService = ((axios: AxiosInstance) => ({
  roles: (payload: object) => axios.get(rolesApiRoutes.roles, payload),
  create: (payload: object) => axios.post(rolesApiRoutes.create, payload),
  update: ({ id, payload}: { id: string, payload: object }) => axios.put(`${rolesApiRoutes.update}/${id}`, payload),
  delete: (id: string) => axios.delete(`${rolesApiRoutes.delete}/${id}`),
})) as unknown as TServices

export { rolesService }