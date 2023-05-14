import type { AxiosInstance } from 'axios'
import { useSerializeURLs, type TServices } from '@rich/http'
const dashboardApiRoutes = useSerializeURLs('/rich/web', {
  dashboard: '/'
})

const dashboardService = ((axios: AxiosInstance) => ({
  dashboard: (payload: object) => axios.post(dashboardApiRoutes.dashboard, payload)
})) as unknown as TServices

export { dashboardService }
