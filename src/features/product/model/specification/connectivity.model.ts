import { BaseEntity } from '@shared/model'
import { ProductSpecification } from '@feature/product'

export class SpecificationConnectivity extends BaseEntity {
  mobileStandard?: string
  connectivity?: string[]
  wifiStandard?: string
  bluetoothVersion?: number
  audio?: string
  productSpecification?: ProductSpecification
}
