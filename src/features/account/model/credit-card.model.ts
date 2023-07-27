import { BaseEntity } from '@shared/model'
import { User } from '@feature/account'

export class CreditCard extends BaseEntity {
  creditCardNumber: string
  expirationDate: Date
  expirationDateFormatted?: string
  ccv: number
  cardType: string
  main?: boolean
  user?: User
}
