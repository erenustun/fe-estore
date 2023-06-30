import { BaseEntity, Product } from '@shared/model'

export class ProductImage extends BaseEntity {
  url: string
  product?: Product
}
