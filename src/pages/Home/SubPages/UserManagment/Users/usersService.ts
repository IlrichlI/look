import type {AxiosInstance} from 'axios'
import {useSerializeURLs, type TServices} from '@rich/http'
const usersApiRoutes = useSerializeURLs('/rich/web/user',{
  users: '/search',
  update: '/update',
})

const usersService = ((axios: AxiosInstance) => ({
  users: (payload: object) => axios.get(usersApiRoutes.users, payload),
  update: ({ id, payload}: { id: string, payload: object }) => axios.put(`${usersApiRoutes.update}/${id}`, payload),
})) as unknown as TServices

export { usersService }