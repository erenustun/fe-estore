import {
  Address,
  BaseEntity,
  CreditCard,
  Order,
  ProductRating,
} from '@shared/model'

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
  authExpiresAt?: Date
  passwordToken?: string | null
  passwordTokenCreated?: Date | null
  emailToken?: string | null
  emailTokenCreated?: Date | null
  address?: Address[]
  creditCards?: CreditCard[]
  order?: Order[]
  rating?: ProductRating[]
}
