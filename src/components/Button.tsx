import tw from 'tailwind-styled-components'
import { themeConfig } from '@src/config/theme.config'
import { PropsWithChildren } from 'react'

interface ButtonProps {
  style?: 'primary' | 'success' | 'warning' | 'danger' | 'secondary'
  primary?: boolean
}

const ButtonBase = tw.button`
  ${() => themeConfig.buttonText}
  ${() => themeConfig.buttonPadding}
  ${() => themeConfig.animationTransition}
  ${() => themeConfig.animationDuration200}
  ${() => themeConfig.animationEaseIn}
  ${() => themeConfig.radiusMedium}
  cursor-pointer
`

const PrimarySolidButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.primaryBackgroundColor}
  ${() => themeConfig.primaryBackgroundHover}
  ${() => themeConfig.primaryBackgroundActive}
`

const PrimaryOutlinedButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.primaryBackgroundColor}
`

/*const Button = tw(ButtonBase)<ButtonProps>`
  ${p => {
    switch (p.style) {
      case 'primary':
        return themeConfig.primaryBackgroundColor
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
    switch (p.style) {
      case 'primary':
        return `hover:bg-blue-400`
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
  ${p => !p.primary && 'bg-transparent border'}
  ${p => {
    if (!p.primary) {
      switch (p.style) {
        case 'primary':
          return `bg-transparent ${themeConfig.primaryBorderColor}`
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
`*/

const Button = ({
  children,
  primary,
  style,
}: PropsWithChildren<ButtonProps>) => {
  if (primary) {
    switch (style) {
      case 'primary':
        return <PrimarySolidButton>{children}</PrimarySolidButton>
    }
  } else {
    switch (style) {
      case 'primary':
        return <PrimaryOutlinedButton>{children}</PrimaryOutlinedButton>
    }
  }

  return null
}

Button.defaultProps = {
  style: 'primary',
  primary: true,
}

export { Button }
