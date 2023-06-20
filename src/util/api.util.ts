export const getBearerToken = () => {
  if (typeof localStorage !== 'undefined') {
    const token = JSON.parse(localStorage.getItem('auth-storage') as string)
      ?.state?.accessToken
    return token ? token : null
  }
  return null
}
