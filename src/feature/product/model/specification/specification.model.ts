import { BaseEntity } from '@shared/model'
import {
  Product,
  SpecificationBattery,
  SpecificationConnectivity,
  SpecificationCPU,
  SpecificationDisplay,
} from '@feature/product'

export class ProductSpecification extends BaseEntity {
  dataRam: number
  dataStorage: number[]
  dimensionLength: number
  dimensionWidth: number
  dimensionDepth: number
  dimensionUnit?: string
  dimensionWeight: number
  battery: SpecificationBattery
  connectivity: SpecificationConnectivity
  cpu: SpecificationCPU
  display: SpecificationDisplay
  product?: Product
}
