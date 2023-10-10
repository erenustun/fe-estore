import tw from 'tailwind-styled-components'
import { FormHTMLAttributes } from 'react'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string
  loading?: boolean
}

const Form = tw.form<FormProps>`
  flex
  flex-col
  self-start
  font-light
  space-y-10
  mx-auto
  relative
  ${props => props.loading && 'blur-sm'}
  ${props => props.className && props.className}
 `

Form.defaultProps = {
  loading: false,
}

export { Form }
