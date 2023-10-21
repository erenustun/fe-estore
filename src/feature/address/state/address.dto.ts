import { Address } from '@feature/address'

export interface IAddressStore {
  error: string | null
  mainShipping: Address | null
  setMainShipping: (address: Address) => void
  closeCreateShipping: () => void
  showCreateShipping: boolean
  showUpdateShipping: boolean
  toggleUpdateAddress: () => void
  toggleCreateAddress: () => void
}
