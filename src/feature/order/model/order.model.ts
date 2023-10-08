import { OrderHasProduct } from '@feature/order'
import { Address } from '@feature/address'
import { User } from '@feature/account'

export class Order {
  id: number
  total: number
  pending: boolean
  cancelled?: Date | null
  billingAddress?: Address
  products: OrderHasProduct[]
  shippingAddress?: Address
  user?: User | null
  created?: Date
  updated?: Date
  deleted?: Date
}
