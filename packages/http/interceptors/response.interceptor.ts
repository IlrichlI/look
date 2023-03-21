import type { AxiosError } from 'axios'
import useRedirectToLogin from '../useRedirectToLogin/useRedirectToLogin'
// import { Message } from '@fs/utils'
import { get } from 'lodash'

export function responseInterceptors(response: any) {
    const responseStatus = get(response, 'status', 200)
    if (responseStatus === 200 || responseStatus === 201) {
        return response.data
    }
}

export async function responseError(error: AxiosError) {
    const { redirectToLogin } = useRedirectToLogin()
    const responseStatus = get(error, 'response.status', 400)
    if (Number(responseStatus) === 401) {
        redirectToLogin()
    } else {
        await getErrorMessage(error, Number(responseStatus))
    }
}

async function getErrorMessage(error: any, status: number) {
    // const data = error.response?.data
    if (status >= 400 && status < 500) {
        // await Message('error', data?.message || status)
    } else if (status === 500) {
        // await Message('error', 'messages.error.500')
    }
}
