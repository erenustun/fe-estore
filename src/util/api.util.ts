export const getBearerToken = () => {
  const jwt =
    typeof localStorage !== 'undefined' && document.cookie.split('=')[1]
  if (typeof jwt !== 'undefined') return jwt
  return null
}
