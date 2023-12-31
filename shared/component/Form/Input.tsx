import tw from 'tailwind-styled-components'
import { InputHTMLAttributes, ReactNode, useState } from 'react'
import { FormGroup } from '@component'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { themeConfig } from '@shared/config'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  defaultChecked?: boolean
  errors?: any
  error?: any
  noIcon?: boolean
  icon?: ReactNode
  label: ReactNode | string
  name: string
  placeholder?: string
  register: any
  required?: boolean
  secretField?: boolean
  validationSchema?: never
}

const Label = tw.label<{ error: string }>`
  ${() => themeConfig.bodyTextColor}
  ${p => p.error && themeConfig.dangerTextColor}
  mb-1
  select-none
  text-sm
  tracking-wide
  leading-5
`

export const StyledInput = tw.input<InputProps>`
  ${() => themeConfig.bodyTextColor}
  ${() => themeConfig.inputFieldBorder}
  ${() => themeConfig.primaryBorderActive}
  ${() => themeConfig.radiusDefault}
  ${p => p.error && themeConfig.dangerBorderActive}
  bg-transparent
  w-full
  relative
  py-1.5
  outline-none
  ${p => p.error && themeConfig.dangerBorderActive}
  ${props => (!props.noIcon ? 'pl-8' : 'px-2')}
`

const StyledInputError = tw.p`
  ${() => themeConfig.dangerTextColor}
  text-sm
  mt-2
`

export const Input = ({
  className,
  defaultChecked = false,
  errors,
  icon,
  label,
  name,
  noIcon = false,
  placeholder = '',
  register,
  required = false,
  secretField = false,
  type,
  validationSchema,
}: InputProps) => {
  const [fieldVisible, setFieldVisibility] = useState<boolean>(false)
  const toggleFieldVisibility = () => setFieldVisibility(!fieldVisible)

  return (
    <FormGroup className={className}>
      <Label htmlFor={name} error={errors[name]}>
        {label}
        {required && (
          <span className={`ml-1 ${themeConfig.dangerTextColor}`}>*</span>
        )}
      </Label>
      <div className="relative flex">
        {!noIcon && (
          <span
            className={`absolute left-2 top-2 z-10 ${themeConfig.bodyTextColor}`}
          >
            {icon}
          </span>
        )}
        <StyledInput
          defaultChecked={defaultChecked}
          id={name}
          name={name}
          type={!secretField ? type : fieldVisible ? 'text' : 'password'}
          error={errors[name]}
          {...register(name, validationSchema)}
          noIcon={noIcon}
          placeholder={placeholder}
        />
        {secretField && !fieldVisible && (
          <EyeSlashIcon
            className={`absolute right-2 top-2 h-5 w-5 cursor-pointer ${themeConfig.bodyTextColor}`}
            onClick={toggleFieldVisibility}
          />
        )}
        {secretField && fieldVisible && (
          <EyeIcon
            className={`absolute right-2 top-2 h-5 w-5 cursor-pointer ${themeConfig.bodyTextColor}`}
            onClick={toggleFieldVisibility}
          />
        )}
      </div>
      {errors && errors[name]?.message && (
        <StyledInputError>{errors[name]?.message}</StyledInputError>
      )}
    </FormGroup>
  )
}
