import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'
import { PropsWithChildren, useCallback } from 'react'

interface ButtonProps {
  style?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'secondary'
  className?: string
  primary?: boolean
}

const ButtonBase = tw.button<ButtonProps>`
  ${() => themeConfig.buttonText}
  ${() => themeConfig.buttonPadding}
  ${() => themeConfig.animationTransition}
  ${() => themeConfig.animationDuration}
  ${() => themeConfig.animationEaseIn}
  ${() => themeConfig.radiusMedium}
  transform hover:scale-105
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

const Button = ({
  children,
  className,
  primary,
  style,
}: PropsWithChildren<ButtonProps>) => {
  const renderButton = useCallback(() => {
    if (primary) {
      switch (style) {
        case 'primary':
          return (
            <PrimarySolidButton className={className}>
              {children}
            </PrimarySolidButton>
          )
        case 'success':
          return (
            <SuccessSolidButton className={className}>
              {children}
            </SuccessSolidButton>
          )
        case 'info':
          return (
            <InfoSolidButton className={className}>{children}</InfoSolidButton>
          )
        case 'warning':
          return (
            <WarningSolidButton className={className}>
              {children}
            </WarningSolidButton>
          )
        case 'danger':
          return (
            <DangerSolidButton className={className}>
              {children}
            </DangerSolidButton>
          )
        default:
          return (
            <PrimarySolidButton className={className}>
              {children}
            </PrimarySolidButton>
          )
      }
    } else {
      switch (style) {
        case 'primary':
          return (
            <PrimaryOutlinedButton className={className}>
              {children}
            </PrimaryOutlinedButton>
          )
        case 'success':
          return (
            <SuccessOutlinedButton className={className}>
              {children}
            </SuccessOutlinedButton>
          )
        case 'info':
          return (
            <InfoOutlinedButton className={className}>
              {children}
            </InfoOutlinedButton>
          )
        case 'warning':
          return (
            <WarningOutlinedButton className={className}>
              {children}
            </WarningOutlinedButton>
          )
        case 'danger':
          return (
            <DangerOutlinedButton className={className}>
              {children}
            </DangerOutlinedButton>
          )
        default:
          return (
            <PrimaryOutlinedButton className={className}>
              {children}
            </PrimaryOutlinedButton>
          )
      }
    }
  }, [children, className, primary, style])

  return renderButton()
}

Button.defaultProps = {
  style: 'primary',
  primary: true,
}

export { Button }
