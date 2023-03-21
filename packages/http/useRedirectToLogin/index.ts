export function useRedirectToLogin() {
    return {
        redirectToLogin: () => {
            window.localStorage.removeItem('fs-user_name')
            window.localStorage.removeItem('fs-token')
            window.localStorage.removeItem('fs-expires_at')
            window.localStorage.removeItem('fs-expire_minutes')
            window.location.replace(`${window.location}/auth/login`)
        }
    }
}

export default useRedirectToLogin
