import { getCookie } from 'react-use-cookie'

export const getBearerToken = () => {
  const jwt = getCookie('token')
  return jwt && jwt
}

export const formatError = (e: any) =>
  e?.response?.data?.message ||
  e?.message ||
  e?.data?.message ||
  e.graphQLErrors[0].message ||
  'Unexpected network error.'
