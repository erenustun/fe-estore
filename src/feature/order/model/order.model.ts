import { OrderHasProduct } from '@feature/order'
import { BaseEntity } from '@shared/model'
import { Address } from '@feature/address'
import { User } from '@feature/account'

export class Order extends BaseEntity {
  total: number
  pending: boolean
  cancelled?: Date | null
  billingAddress?: Address
  products: OrderHasProduct[]
  shippingAddress?: Address
  user?: User | null
}
