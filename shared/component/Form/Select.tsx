import tw from 'tailwind-styled-components'
import { OptionHTMLAttributes, ReactNode, SelectHTMLAttributes } from 'react'
import { FormGroup, FieldError } from '@component'
import { themeConfig } from '@shared/config'

interface OptionsProps extends OptionHTMLAttributes<HTMLOptionElement> {
  value: string | number
  name?: string | ReactNode
  selected?: boolean
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
  error?: any
  errors?: any
  icon?: ReactNode
  label: ReactNode | string
  name: string
  noIcon?: boolean
  options: OptionsProps[]
  register: any
  required?: boolean
  secretField?: boolean
  validationSchema?: never
}

const Label = tw.label<{ error: string }>`
  ${() => themeConfig.bodyTextColor}
  ${() => themeConfig.formLabel}
  ${p => p.error && themeConfig.dangerTextColor}
`

const StyledSelect = tw.select<SelectProps>`
  ${() => themeConfig.bodyTextColor}
  ${() => themeConfig.inputFieldBorder}
  ${() => themeConfig.primaryBorderActive}
  ${() => themeConfig.radiusDefault}
  bg-transparent
  w-full
  relative
  py-2.5
  outline-none
  ${props => (!props.noIcon ? 'pl-8' : 'px-2')}
`

export const Select = ({
  className,
  errors,
  icon,
  label,
  name,
  noIcon = false,
  options = [],
  register,
  required = false,
  validationSchema,
}: SelectProps) => (
  <FormGroup className={className}>
    <Label htmlFor={name} error={errors[name]}>
      {label}
      {required && (
        <span className={`ml-1 ${themeConfig.dangerTextColor}`}>*</span>
      )}
    </Label>
    <div className="relative flex items-center">
      {!noIcon && (
        <span className={`absolute left-2 z-10 ${themeConfig.bodyTextColor}`}>
          {icon}
        </span>
      )}
      <StyledSelect
        id={name}
        name={name}
        error={errors[name]}
        {...register(name, validationSchema)}
        noIcon={noIcon}
      >
        {options?.map((option: OptionsProps) => (
          <option
            key={option.value}
            className="bg-gray-700 font-sans"
            value={option.value}
            selected={option.selected}
          >
            {option.name ? option.name : option.value}
          </option>
        ))}
      </StyledSelect>
    </div>
    {errors && errors[name]?.message && (
      <FieldError>{errors[name]?.message}</FieldError>
    )}
  </FormGroup>
)
