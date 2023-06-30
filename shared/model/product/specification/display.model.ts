import { BaseEntity, ProductSpecification } from '@shared/model'

export class SpecificationDisplay extends BaseEntity {
  aspectRatio?: string
  pixelDensity?: number
  refreshRate?: number
  resolution?: string
  screenToBody?: number
  size: number
  productSpecification?: ProductSpecification
}
