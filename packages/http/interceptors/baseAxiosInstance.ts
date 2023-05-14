import axios from 'axios'
import { requestError, requestInterceptors } from './request.interceptor'
import { responseError, responseInterceptors } from './response.interceptor'

export function getInstance() {
  const instance = axios.create({
    baseURL: '/api',
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json'
    },
    maxRedirects: 0
  })

  instance.interceptors.request.use(requestInterceptors, requestError)
  instance.interceptors.response.use(responseInterceptors, responseError)
  return { instance }
}
