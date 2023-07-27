import { BaseEntity } from '@shared/model'
import { ProductSpecification } from '@feature/product'

export class SpecificationBattery extends BaseEntity {
  capacity: number
  chargingSpeed?: number
  reverseCharging?: number
  type: string
  wirelessCharging?: number
  productSpecification?: ProductSpecification
}
