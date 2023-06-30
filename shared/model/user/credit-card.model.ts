import { BaseEntity, User } from '@shared/model'

export class CreditCard extends BaseEntity {
  creditCardNumber: string
  expirationDate: Date
  expirationDateFormatted?: string
  ccv: number
  cardType: string
  main?: boolean
  user?: User
}
