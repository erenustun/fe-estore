import { BaseEntity, User } from '@shared/model'

export enum AddressType {
  BILLING = 'billing',
  SHIPPING = 'shipping',
}

export enum Country {
  AT = 'AT',
  CH = 'CH',
  DE = 'DE',
  ES = 'ES',
  FR = 'FR',
  IT = 'IT',
  NL = 'NL',
  PL = 'PL',
  UK = 'UK',
}

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
