export async function requestInterceptors(request: any) {
    const token = window.localStorage.getItem('fs-token')
    request.headers['Authorization'] = `Bearer ${token}`
    return request
}

export function requestError(error: any) {
    return Promise.reject(error)
}
