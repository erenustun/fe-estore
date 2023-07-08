import tw from 'tailwind-styled-components'
import { FormHTMLAttributes } from 'react'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  loading?: boolean
}

const Form = tw.form<FormProps>`
  flex
  flex-col
  self-start
  font-light
  space-y-10
  w-[30rem]
  mx-auto
  relative
  px-5
  ${props => props.loading && 'blur-sm'}
 `

Form.defaultProps = {
  loading: false,
}

export { Form }
