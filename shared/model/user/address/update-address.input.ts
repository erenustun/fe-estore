import { AddressType, BaseEntity, Country } from '@shared/model'

export class UpdateAddressInput extends BaseEntity {
  title?: string
  firstName?: string
  lastName?: string
  companyName?: string
  line1?: string
  zipCode?: string
  state?: string
  phone?: string
  countryCode?: Country | string
  primary?: boolean
  type?: AddressType | string
}
