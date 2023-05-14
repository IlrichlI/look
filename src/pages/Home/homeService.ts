import type { AxiosInstance } from 'axios'
import { useSerializeURLs, type TServices } from '@rich/http'
const homeApiRoutes = useSerializeURLs('/rich/web', {
  home: '/'
})

const homeService = ((axios: AxiosInstance) => ({
  home: (payload: object) => axios.post(homeApiRoutes.home, payload)
})) as unknown as TServices

export { homeService }
