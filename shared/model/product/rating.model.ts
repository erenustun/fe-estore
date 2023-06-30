import { BaseEntity, Product, User } from '@shared/model'

export class ProductRating extends BaseEntity {
  star: number
  text: string
  product: Product
  user: User
}
