import { BaseEntity } from '@src/models/base.model'
import { User } from '@src/model/user.model'

export enum AddressType {
  SHIPPING = 'shipping',
  BILLING = 'billing',
}

export enum Country {
  AT = 'AT',
  DE = 'DE',
  FR = 'FR',
  IT = 'IT',
  NL = 'NL',
  PL = 'PL',
  ES = 'ES',
  CH = 'CH',
  UK = 'UK',
}

export class Address extends BaseEntity {
  title?: string
  firstName: string
  lastName: string
  companyName?: string
  line1: string
  zipCode: string
  state: string
  phone?: string
  countryCode: Country
  primary?: boolean
  type: AddressType
  user: User
}
