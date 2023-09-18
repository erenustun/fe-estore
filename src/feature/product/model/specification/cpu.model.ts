import { BaseEntity } from '@shared/model'
import { ProductSpecification } from '@feature/product'

export class SpecificationCPU extends BaseEntity {
  cores?: number
  frequency?: number[]
  name: string
  productSpecification?: ProductSpecification
}
