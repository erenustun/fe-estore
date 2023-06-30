import { Cookies } from 'react-cookie'
import { tokenKey } from '@shared/constant'

export const getBearerToken = () => {
  const jwt = new Cookies().get(tokenKey)
  return jwt && jwt
}
