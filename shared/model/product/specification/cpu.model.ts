import { BaseEntity, ProductSpecification } from '@shared/model'

export class SpecificationCPU extends BaseEntity {
  cores?: number
  frequency?: number[]
  name: string
  productSpecification?: ProductSpecification
}
