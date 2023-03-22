export function useRedirectToLogin() {
  return {
    redirectToLogin: () => {
      window.localStorage.removeItem('rich-user_name')
      window.localStorage.removeItem('rich-token')
      window.location.replace(`${window.location}/login`)
    }
  }
}

export default useRedirectToLogin
