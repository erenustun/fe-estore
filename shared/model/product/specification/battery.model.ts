import { BaseEntity, ProductSpecification } from '@shared/model'

export class SpecificationBattery extends BaseEntity {
  capacity: number
  chargingSpeed?: number
  reverseCharging?: number
  type: string
  wirelessCharging?: number
  productSpecification?: ProductSpecification
}
