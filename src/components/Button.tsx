import tw from 'tailwind-styled-components'

interface ButtonProps {
  $style: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'secondary'
  $primary?: boolean
}

const Button = tw.button<ButtonProps>`
  py-1.5
  px-4
  rounded
  transition
  duration-200
  ease-in
  hover:shadow
  ${p => {
    switch (p.$style) {
      case 'primary':
        return 'bg-blue-600'
      case 'info':
        return 'bg-sky-500'
      case 'success':
        return 'bg-green-700'
      case 'warning':
        return 'bg-orange-600'
      case 'danger':
        return 'bg-rose-600'
      case 'secondary':
        return 'bg-slate-600'
      default:
        return 'bg-sky-700'
    }
  }}
  ${p => {
    switch (p.$style) {
      case 'primary':
        return 'hover:bg-blue-500'
      case 'info':
        return 'hover:bg-sky-400'
      case 'success':
        return 'hover:bg-green-600'
      case 'warning':
        return 'hover:bg-orange-500'
      case 'danger':
        return 'hover:bg-rose-400'
      case 'secondary':
        return 'hover:bg-slate-500'
      default:
        return 'hover:bg-sky-500'
    }
  }}
  ${p => !p.$primary && 'bg-transparent border'}
  ${p => {
    if (!p.$primary) {
      switch (p.$style) {
        case 'primary':
          return 'border-blue-500'
        case 'info':
          return 'border-sky-500'
        case 'success':
          return 'border-green-500'
        case 'warning':
          return 'border-orange-400'
        case 'danger':
          return 'border-rose-400'
        case 'secondary':
          return 'border-slate-400'
        default:
          return 'border-sky-400'
      }
    }
  }}
`

Button.defaultProps = {
  $style: 'primary',
  $primary: true,
}

export { Button }
