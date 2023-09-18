import { create } from 'zustand'
import { ILoginInput } from '@feature/auth/dto/login.input'
import { signIn, signUp } from '@feature/auth/service/auth.service'
import { IRegisterInput } from '@feature/auth/dto/register.input'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { setCookie } from 'react-use-cookie'
import { formatError } from '@shared/util'
import { apolloClient } from '@shared/config'
import { User } from '@feature/account'

interface IToken {
  expires?: string
  jwt?: string
}

export interface IAuthStore {
  error?: any
  token?: IToken
  user?: User
  setError: (error: string | number | undefined) => void
  signIn: (input: ILoginInput) => Promise<void>
  signOut: () => Promise<void>
  signUp: (input: IRegisterInput) => Promise<void>
  reset: () => void
}

const initial = {
  token: undefined,
  user: undefined,
}

const useAuthStore = create(
  devtools(
    persist<IAuthStore>(
      set => ({
        ...initial,
        signIn: async (loginInput: ILoginInput) => {
          try {
            set((state: IAuthStore) => ({ ...state, error: undefined }))
            const { data } = await signIn(loginInput)
            set((state: IAuthStore) => ({
              ...state,
              token: {
                jwt: data.signIn.token,
              },
              user: data.signIn.user,
            }))
            setCookie('token', data.signIn.token)
          } catch (e: any) {
            const error = formatError(e)
            set((state: IAuthStore) => ({ ...state, error }))
          }
        },
        signUp: async (registerInput: IRegisterInput) => {
          try {
            set((state: IAuthStore) => ({ ...state, error: undefined }))
            await signUp(registerInput)
          } catch (e: any) {
            const error = formatError(e)
            set((state: IAuthStore) => ({ ...state, error }))
          }
        },
        signOut: async () => {
          try {
            set(() => initial)
            setCookie('token', '')
            localStorage?.removeItem('auth-storage')
            await apolloClient.resetStore()
          } catch (error: any) {
            set((state: IAuthStore) => ({
              ...state,
              error: error.graphQLErrors[0].message,
            }))
          }
        },
        setError: error =>
          set((state: IAuthStore) => ({ ...state, error: error })),
        reset: () => set(state => ({ ...state, ...initial })),
      }),
      { name: 'auth-storage', storage: createJSONStorage(() => localStorage) }
    ),
    { name: 'Auth Store' }
  )
)

export default useAuthStore
