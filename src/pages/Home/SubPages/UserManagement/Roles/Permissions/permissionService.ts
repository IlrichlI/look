import type { AxiosInstance } from 'axios'
import { useSerializeURLs, type TServices } from '@rich/http'

const permissionsApiRoutes = useSerializeURLs('/rich/web/permission', {
  allRoutes: '/allRoutes',
  search: '/search',
  generate: '/generate'
})

const permissionsService = ((axios: AxiosInstance) => ({
  allRoutes: () => axios.get(permissionsApiRoutes.allRoutes),
  search: (payload: object) => axios.get(permissionsApiRoutes.search, payload),
  generate: (payload: object) => axios.post(permissionsApiRoutes.generate, payload)
})) as unknown as TServices

export { permissionsService }
