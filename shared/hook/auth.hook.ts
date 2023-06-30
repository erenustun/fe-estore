import SignInMutation from '@feature/auth/graphql/sign-in.graphql'
import { apolloClient } from '@shared/config'

export const useAuthHook = () => {
  const signIn = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) =>
    await apolloClient.mutate({
      mutation: SignInMutation,
      variables: { data: { email, password } },
    })

  return {
    signIn,
  }
}
