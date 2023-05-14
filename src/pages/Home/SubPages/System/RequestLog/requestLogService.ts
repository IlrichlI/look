import type { AxiosInstance } from 'axios'
import { useSerializeURLs, type TServices } from '@rich/http'
const requestLogApiRoutes = useSerializeURLs('/rich/web/request-log', {
  requestLog: '/search'
})

const requestLogService = ((axios: AxiosInstance) => ({
  search: (payload: object) => axios.get(requestLogApiRoutes.requestLog, payload)
})) as unknown as TServices

export { requestLogService }
