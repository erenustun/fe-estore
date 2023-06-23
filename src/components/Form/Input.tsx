import tw from 'tailwind-styled-components'
import { InputHTMLAttributes, ReactNode, useState } from 'react'
import { FormGroup } from '@components/Form/Group'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { themeConfig } from '@src/config/theme.config'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: any
  error?: any
  icon?: string | ReactNode
  label: string
  name: string
  register: any
  required?: boolean
  secretField?: boolean
  validationSchema?: never
}

const Label = tw.label<{ error: string }>`
  ${() => themeConfig.mainTextColor}
  ${p => p.error && themeConfig.errorTextColor}
  mb-1
  select-none
  text-sm
  tracking-wide
  leading-5
`

const StyledInput = tw.input<InputProps>`
  ${() => themeConfig.mainTextColor}
  ${() => themeConfig.inputFieldBorder}
  ${() => themeConfig.primaryBorderActive}
  ${() => themeConfig.radiusDefault}
  ${p => p.error && themeConfig.errorBorderFocus}
  bg-transparent
  w-full
  relative
  py-1.5
  outline-none
  pl-8
`

const StyledInputError = tw.p`
  ${() => themeConfig.errorTextColor}
  text-sm
  mt-2
`

export const Input = ({
  errors,
  icon,
  label,
  name,
  register,
  required = false,
  secretField = false,
  type,
  validationSchema,
}: InputProps) => {
  const [fieldVisible, setFieldVisibility] = useState<boolean>(false)
  const toggleFieldVisibility = () => setFieldVisibility(!fieldVisible)

  return (
    <FormGroup>
      <Label htmlFor={name} error={errors[name]}>
        {label}
        {required && (
          <span className={`ml-1 ${themeConfig.errorTextColor}`}>*</span>
        )}
      </Label>
      <div className="relative flex">
        {icon && (
          <span
            className={`absolute top-2 left-2 z-10 ${themeConfig.mainTextColor}`}
          >
            {icon}
          </span>
        )}
        <StyledInput
          id={name}
          name={name}
          type={!secretField ? type : fieldVisible ? 'text' : 'password'}
          error={errors[name]}
          {...register(name, validationSchema)}
        />
        {secretField && !fieldVisible && (
          <EyeSlashIcon
            className={`absolute w-5 h-5 right-2 top-2 cursor-pointer ${themeConfig.mainTextColor}`}
            onClick={toggleFieldVisibility}
          />
        )}
        {secretField && fieldVisible && (
          <EyeIcon
            className={`absolute w-5 h-5 right-2 top-2 cursor-pointer ${themeConfig.mainTextColor}`}
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
