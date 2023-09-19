import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { User } from '@feature/account'

export interface IUserStore {
  user?: User
  settings?: ISettings
  setLanguage: (language: string) => void
}

interface ISettings {
  darkMode?: boolean
  language?: string
}

const initial = {
  user: undefined,
  settings: {
    language: 'en',
    darkMode: true,
  },
}

const useUserStore = create(
  devtools(
    persist<IUserStore>(
      set => ({
        ...initial,
        setLanguage: language => {
          set((state: IUserStore) => ({
            ...state,
            settings: {
              language: language,
              darkMode: state.settings?.darkMode,
            },
          }))
        },
      }),
      { name: 'user-storage', storage: createJSONStorage(() => localStorage) }
    ),
    { name: 'User Store' }
  )
)

export default useUserStore
