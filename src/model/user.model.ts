import { BaseEntity } from '@src/models/base.model'
import { Address } from '@src/model/address.model'
//import { CreditCard } from '@src/model/credit-card.model'
//import { Order } from '@src/model/order.model'
//import { ProductRating } from '@src/model/product/rating.model'

enum Role {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
  PRODUCT_MANAGEMENT = 'product-management',
}

export class User extends BaseEntity {
  avatar?: string
  firstName: string
  lastName: string
  email: string
  password: string
  role?: Role
  phone?: string
  activated?: Date
  activationToken?: string | null
  passwordToken?: string | null
  passwordTokenCreated?: Date | null
  emailToken?: string | null
  emailTokenCreated?: Date | null
  address?: Address[]
  //creditCards?: CreditCard[]
  //order?: Order[]
  //rating?: ProductRating[]
}
