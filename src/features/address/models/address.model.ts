import { BaseEntity, User } from '@shared/model'
import { AddressType, Country } from '@feature/address'

export class Address extends BaseEntity {
  companyName?: string
  countryCode: Country
  firstName: string
  lastName: string
  line1: string
  phone?: string
  primary?: boolean
  state: string
  title?: string
  type: AddressType
  user?: User
  zipCode: string
}
