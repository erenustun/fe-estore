import { BaseEntity, Product } from '@shared/model'

export class ProductCategory extends BaseEntity {
  name: string
  product?: Product
}
