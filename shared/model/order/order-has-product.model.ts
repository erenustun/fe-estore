import { Order, Product } from '@shared/model'

export class OrderHasProduct {
  id: string
  quantity: number
  order: Order
  product: Product
}
