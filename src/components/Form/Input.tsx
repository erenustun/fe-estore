import tw from 'tailwind-styled-components'
import { InputHTMLAttributes, ReactNode, useState } from 'react'
import { FormGroup } from '@components/Form/Group'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

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

const StyledInput = tw.input<InputProps>`
  border
  border-slate-100
  bg-transparent
  rounded
  w-full
  relative
  py-1.5
  text-slate-50
  outline-none
  focus:border
  focus:border-blue-400
  pl-8
  ${p => p.error && 'border border-rose-500 focus:border-rose-500'}
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
      <label htmlFor={name} className="mb-1 select-none">
        {label}
        {required && <span className="text-rose-400 ml-1">*</span>}
      </label>
      <div className="relative flex">
        {icon && <span className="absolute top-2 left-2 z-10">{icon}</span>}
        <StyledInput
          id={name}
          name={name}
          type={!secretField ? type : fieldVisible ? 'text' : 'password'}
          error={errors[name]}
          {...register(name, validationSchema)}
        />
        {secretField && !fieldVisible && (
          <EyeSlashIcon
            className="absolute w-5 h-5 right-2 top-2 cursor-pointer"
            onClick={toggleFieldVisibility}
          />
        )}
        {secretField && fieldVisible && (
          <EyeIcon
            className="absolute w-5 h-5 right-2 top-2 cursor-pointer"
            onClick={toggleFieldVisibility}
          />
        )}
      </div>
      {errors && errors[name]?.message && (
        <span className="text-rose-400 text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </FormGroup>
  )
}
