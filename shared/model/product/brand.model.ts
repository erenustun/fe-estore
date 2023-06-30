import { BaseEntity, Product } from '@shared/model'

export class ProductBrand extends BaseEntity {
  name: string
  product?: Product
}
