import { Address, BaseEntity, OrderHasProduct, User } from '@shared/model'

export class Order extends BaseEntity {
  total: number
  pending: boolean
  cancelled?: Date | null
  billingAddress?: Address
  products: OrderHasProduct[]
  shippingAddress?: Address
  user?: User | null
}
