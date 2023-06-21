export const getBearerToken = () => {
  if (typeof localStorage !== 'undefined') console.log(document.cookie)
  const jwt =
    typeof localStorage !== 'undefined' && document.cookie.split('=')[1]
  if (typeof jwt !== 'undefined') return jwt
  return null
}
