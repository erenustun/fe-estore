import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { User } from '@feature/account'
import { CreditCard } from '@feature/order'

export interface CustomerStoreProps {
  user: User | null
  settings: ISettings
  setLanguage: (language: string) => void
  toggleUpdatePayment: () => void
  toggleCreateBilling: () => void
  setMainBilling: (card: CreditCard) => void
}

interface ISettings {
  darkMode: boolean
  language: string
  mainBilling: CreditCard | null
  showUpdatePayment: boolean
  showCreateBilling: boolean
}

const initial = {
  user: null,
  settings: {
    darkMode: true,
    language: 'en',
    mainBilling: null,
    showUpdatePayment: false,
    showCreateBilling: false,
  },
}

const useUserStore = create(
  devtools(
    persist<CustomerStoreProps>(
      set => ({
        ...initial,
        setLanguage: language => {
          set((state: CustomerStoreProps) => ({
            ...state,
            settings: {
              ...state.settings,
              language: language,
            },
          }))
        },
        setMainBilling: creditCard => {
          set((state: CustomerStoreProps) => ({
            ...state,
            settings: {
              ...state.settings,
              mainPayment: creditCard,
            },
          }))
        },
        toggleUpdatePayment: () => {
          set((state: CustomerStoreProps) => ({
            ...state,
            settings: {
              ...state.settings,
              showUpdatePayment: !state.settings?.showUpdatePayment,
            },
          }))
        },
        toggleCreateBilling: () => {
          set((state: CustomerStoreProps) => ({
            ...state,
            settings: {
              ...state.settings,
              showCreateBilling: !state.settings?.showCreateBilling,
            },
          }))
        },
      }),
      {
        name: 'customer-storage',
        storage: createJSONStorage(() => localStorage),
      }
    ),
    { name: 'Customer Store' }
  )
)

export default useUserStore
