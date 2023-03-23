export async function requestInterceptors(request: any) {
  const token = window.localStorage.getItem('rich-token')
  request.headers['Authorization'] = `Bearer ${token}`
  return request
}

export function requestError(error: any) {
  return Promise.reject(error)
}
