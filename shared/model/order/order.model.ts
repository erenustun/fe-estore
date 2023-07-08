import { BaseEntity, OrderHasProduct, User } from '@shared/model'
import { Address } from '@feature/address'

export class Order extends BaseEntity {
  total: number
  pending: boolean
  cancelled?: Date | null
  billingAddress?: Address
  products: OrderHasProduct[]
  shippingAddress?: Address
  user?: User | null
}
