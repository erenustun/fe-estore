export const getNameFromEmail = (email: string) => {
  return email?.slice(0, email.indexOf('@'))
}
