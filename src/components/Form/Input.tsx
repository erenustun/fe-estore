import tw from 'tailwind-styled-components'

interface InputProps {
  $error?: any
}

export const Input = tw.input<InputProps>`
  bg-slate-100
  rounded-md
  px-2
  py-1.5
  text-slate-800
  outline-none
  focus:border
  focus:border-blue-500
  ${p => p.$error && 'border border-rose-500 focus:border-rose-500'}
`
