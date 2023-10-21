import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { formatError } from '@shared/util'
import { Address, IAddressStore } from '@feature/address'

const initial = {
  error: null,
  mainShipping: null,
  showCreateShipping: false,
  showUpdateShipping: false,
}

const useAddressStore = create(
  devtools(
    persist<IAddressStore>(
      set => ({
        ...initial,
        toggleCreateAddress: () => {
          try {
            set(state => ({
              ...state,
              showCreateShipping: !state.showCreateShipping,
            }))
          } catch (e: any) {
            const error = formatError(e)
            set(state => ({ ...state, fetching: false, error }))
          }
        },
        toggleUpdateAddress: () => {
          try {
            set(state => ({
              ...state,
              showUpdateShipping: !state.showUpdateShipping,
            }))
          } catch (e: any) {
            const error = formatError(e)
            set(state => ({ ...state, fetching: false, error }))
          }
        },
        setMainShipping: (address: Address) => {
          try {
            set(state => ({
              ...state,
              mainShipping: address,
            }))
          } catch (error: any) {
            set(state => ({ ...state, error: error.message }))
          }
        },
        closeCreateShipping: () => {
          try {
            set(state => ({
              ...state,
              showCreateShipping: false,
            }))
          } catch (error: any) {
            set(state => ({ ...state, error: error.message }))
          }
        },
      }),
      {
        name: 'address-storage',
        storage: createJSONStorage(() => localStorage),
      }
    ),
    { name: 'Address Store' }
  )
)

export default useAddressStore
