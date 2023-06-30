import {
  BaseEntity,
  OrderHasProduct,
  ProductBrand,
  ProductCategory,
  ProductImage,
  ProductRating,
  ProductSpecification,
} from '@shared/model'

export class Product extends BaseEntity {
  description?: string
  discount?: number
  name: string
  osUpgradable?: number
  price: number
  ratingAverage?: number
  sku: string
  stock: number
  thumbnail?: string
  warranty?: number
  brand: ProductBrand
  category: ProductCategory
  image?: ProductImage[]
  order?: OrderHasProduct[]
  rating?: ProductRating[]
  specification: ProductSpecification
}
