import { BaseEntity, ProductSpecification } from '@shared/model'

export class SpecificationConnectivity extends BaseEntity {
  mobileStandard?: string
  connectivity?: string[]
  wifiStandard?: string
  bluetoothVersion?: number
  audio?: string
  productSpecification?: ProductSpecification
}
