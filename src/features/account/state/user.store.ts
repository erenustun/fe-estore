import { User } from '@shared/model'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

export const appLanguages = ['en', 'de', 'fr']

export interface IUserStore {
  user?: User
  settings?: ISettings
  setLanguage: (language: ILanguage | string) => void
}

interface ISettings {
  darkMode?: boolean
  language?: ILanguage | string
}

export type ILanguage = 'en' | 'de' | 'fr'

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
              language,
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
