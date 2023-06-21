import { z } from 'zod'

export const VALIDATION_EMAIL = {
  email: z
    .string({ required_error: 'An E-mail is required' })
    .email('E-Mail must be valid.'),
}

export const VALIDATION_PASSWORD = {
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Password requires a minimum of 6 characters' })
    .max(96, { message: "Password can't contain more than 96 characters" }),
}
