import type { AxiosInstance } from 'axios'
import { useSerializeURLs, type TServices } from '@rich/http'
export const usersApiRoutes = useSerializeURLs('/rich/web/user', {
  users: '/search',
  update: '/update'
})

const rolesApiRoutes = useSerializeURLs('/rich/web/role', {
  roles: '/search'
})

const usersService = ((axios: AxiosInstance) => ({
  roles: (payload: object) => axios.get(rolesApiRoutes.roles, payload),
  users: (payload: object) => axios.get(usersApiRoutes.users, payload),
  update: ({ id, payload }: { id: string; payload: object }) =>
    axios.put(`${usersApiRoutes.update}/${id}`, payload)
})) as unknown as TServices

export { usersService }
