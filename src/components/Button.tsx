import tw from 'tailwind-styled-components'
import { themeConfig } from '@src/config/theme.config'
import { PropsWithChildren, useCallback } from 'react'

interface ButtonProps {
  style?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'secondary'
  primary?: boolean
}

const ButtonBase = tw.button`
  ${() => themeConfig.buttonText}
  ${() => themeConfig.buttonPadding}
  ${() => themeConfig.animationTransition}
  ${() => themeConfig.animationDuration}
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
  ${() => themeConfig.primaryBorderColor}
  ${() => themeConfig.primaryBorderActive}
  ${() => themeConfig.primaryTextColor}
  ${() => themeConfig.primaryBackgroundActive}
`
const SuccessSolidButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.successBackgroundColor}
  ${() => themeConfig.successBackgroundHover}
  ${() => themeConfig.successBackgroundActive}
`

const SuccessOutlinedButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.successBorderColor}
  ${() => themeConfig.successBorderActive}
  ${() => themeConfig.successTextColor}
  ${() => themeConfig.successBackgroundActive}
`

const InfoSolidButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.infoBackgroundColor}
  ${() => themeConfig.infoBackgroundHover}
  ${() => themeConfig.infoBackgroundActive}
`

const InfoOutlinedButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.infoBorderColor}
  ${() => themeConfig.infoBorderActive}
  ${() => themeConfig.infoTextColor}
  ${() => themeConfig.infoBackgroundActive}
`

const WarningSolidButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.warningBackgroundColor}
  ${() => themeConfig.warningBackgroundHover}
  ${() => themeConfig.warningBackgroundActive}
`

const WarningOutlinedButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.warningBorderColor}
  ${() => themeConfig.warningBorderActive}
  ${() => themeConfig.warningTextColor}
  ${() => themeConfig.warningBackgroundActive}
`

const DangerSolidButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.dangerBackgroundColor}
  ${() => themeConfig.dangerBackgroundHover}
  ${() => themeConfig.dangerBackgroundActive}
`

const DangerOutlinedButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.dangerBorderColor}
  ${() => themeConfig.dangerBorderActive}
  ${() => themeConfig.dangerTextColor}
  ${() => themeConfig.dangerBackgroundActive}
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
  const renderButton = useCallback(() => {
    if (primary) {
      switch (style) {
        case 'primary':
          return <PrimarySolidButton>{children}</PrimarySolidButton>
        case 'success':
          return <SuccessSolidButton>{children}</SuccessSolidButton>
        case 'info':
          return <InfoSolidButton>{children}</InfoSolidButton>
        case 'warning':
          return <WarningSolidButton>{children}</WarningSolidButton>
        case 'danger':
          return <DangerSolidButton>{children}</DangerSolidButton>
        default:
          return <PrimarySolidButton>{children}</PrimarySolidButton>
      }
    } else {
      switch (style) {
        case 'primary':
          return <PrimaryOutlinedButton>{children}</PrimaryOutlinedButton>
        case 'success':
          return <SuccessOutlinedButton>{children}</SuccessOutlinedButton>
        case 'info':
          return <InfoOutlinedButton>{children}</InfoOutlinedButton>
        case 'warning':
          return <WarningOutlinedButton>{children}</WarningOutlinedButton>
        case 'danger':
          return <DangerOutlinedButton>{children}</DangerOutlinedButton>
        default:
          return <PrimaryOutlinedButton>{children}</PrimaryOutlinedButton>
      }
    }
  }, [children, primary, style])

  return renderButton()
}

Button.defaultProps = {
  style: 'primary',
  primary: true,
}

export { Button }
