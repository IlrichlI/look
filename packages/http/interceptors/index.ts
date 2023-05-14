// import { Message } from '@rich/utils'
import type { AxiosInstance } from 'axios'

export const AxiosErrorHandler = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    function (response: any) {
      if (response.data) {
        return response.data
      } else {
        return response
      }
    },
    async function (error) {
      const data = error.response?.data
      if (data?.message) {
        // await Message("error", data.message)
      } else {
        // await Message("error",'خطا سمت سرور')
      }
    }
  )
}

export * from './baseAxiosInstance'
