import * as Yup from 'yup'
import { AddressType, Country } from '@feature/address'

export const countries = Object.values(Country)
export const addressTypes = Object.values(AddressType)

export const VALIDATION_COMPANY_NAME_OPTIONAL = {
  companyName: Yup.string().notRequired(),
}

export const VALIDATION_COUNTRY_OPTIONAL = {
  countryCode: Yup.mixed<Country>().oneOf(countries).notRequired(),
}

export const VALIDATION_FIRST_NAME_OPTIONAL = {
  firstName: Yup.string().notRequired(),
}

export const VALIDATION_LAST_NAME_OPTIONAL = {
  lastName: Yup.string().notRequired(),
}

export const VALIDATION_LINE1_OPTIONAL = {
  line1: Yup.string().notRequired(),
}

export const VALIDATION_PHONE_OPTIONAL = {
  phone: Yup.string().notRequired(),
}

export const VALIDATION_PRIMARY_OPTIONAL = {
  phone: Yup.boolean().notRequired(),
}

export const VALIDATION_STATE_OPTIONAL = {
  state: Yup.string().notRequired(),
}

export const VALIDATION_TITLE_OPTIONAL = {
  title: Yup.string().oneOf(['mr', 'ms', 'mrs', 'mx']).notRequired(),
}

export const VALIDATION_TYPE_OPTIONAL = {
  countryCode: Yup.mixed<AddressType>().oneOf(addressTypes).notRequired(),
}

export const VALIDATION_ZIP_CODE_OPTIONAL = {
  zipCode: Yup.string().notRequired(),
}
