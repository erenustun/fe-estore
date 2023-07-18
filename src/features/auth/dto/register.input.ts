import { User } from '@shared/model'

export interface IRegisterInput extends User {
  password: string
}
