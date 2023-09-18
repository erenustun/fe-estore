import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'
import { PropsWithChildren, useCallback } from 'react'

interface ButtonProps {
  style?:
    | 'primary'
    | 'primary-dark'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'secondary'
  className?: string
  onClick?: () => void
  primary?: boolean
}

const ButtonBase = tw.button<ButtonProps>`
  ${() => themeConfig.buttonText}
  ${() => themeConfig.buttonPadding}
  ${() => themeConfig.animationTransition}
  ${() => themeConfig.animationDuration}
  ${() => themeConfig.animationEaseIn}
  ${() => themeConfig.radiusSmall}
  flex 
  items-center 
  justify-center
  transform 
  hover:scale-[101%]
  cursor-pointer
`

const PrimarySolidButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.primaryBackgroundColor}
  ${() => themeConfig.primaryBackgroundHover}
  ${() => themeConfig.primaryBackgroundActive}
  ${props => props.className}
`

const PrimaryDarkButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.primaryBackgroundColorDark}
  ${() => themeConfig.primaryBackgroundHoverDark}
  ${() => themeConfig.primaryBackgroundActiveDark}
  ${props => props.className}
`

const PrimaryOutlinedButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.primaryBorderColor}
  ${() => themeConfig.primaryBorderActive}
  ${() => themeConfig.primaryTextColor}
  ${() => themeConfig.primaryBackgroundActive}
  ${props => props.className}
`

const SuccessSolidButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.successBackgroundColor}
  ${() => themeConfig.successBackgroundHover}
  ${() => themeConfig.successBackgroundActive}
  ${props => props.className}
`

const SuccessOutlinedButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.successBorderColor}
  ${() => themeConfig.successBorderActive}
  ${() => themeConfig.successTextColor}
  ${() => themeConfig.successBackgroundActive}
  ${props => props.className}
`

const InfoSolidButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.infoBackgroundColor}
  ${() => themeConfig.infoBackgroundHover}
  ${() => themeConfig.infoBackgroundActive}
  ${props => props.className}
`

const InfoOutlinedButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.infoBorderColor}
  ${() => themeConfig.infoBorderActive}
  ${() => themeConfig.infoTextColor}
  ${() => themeConfig.infoBackgroundActive}
  ${props => props.className}
`

const WarningSolidButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.warningBackgroundColor}
  ${() => themeConfig.warningBackgroundHover}
  ${() => themeConfig.warningBackgroundActive}
  ${props => props.className}
`

const WarningOutlinedButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.warningBorderColor}
  ${() => themeConfig.warningBorderActive}
  ${() => themeConfig.warningTextColor}
  ${() => themeConfig.warningBackgroundActive}
  ${props => props.className}
`

const DangerSolidButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.dangerBackgroundColor}
  ${() => themeConfig.dangerBackgroundHover}
  ${() => themeConfig.dangerBackgroundActive}
  ${props => props.className}
`

const DangerOutlinedButton = tw(ButtonBase)<ButtonProps>`
  ${() => themeConfig.dangerBorderColor}
  ${() => themeConfig.dangerBorderActive}
  ${() => themeConfig.dangerTextColor}
  ${() => themeConfig.dangerBackgroundActive}
  ${props => props.className}
`

export const Button = ({
  children,
  className,
  onClick,
  primary = true,
  style = 'primary',
}: PropsWithChildren<ButtonProps>) => {
  const renderButton = useCallback(() => {
    if (primary) {
      switch (style) {
        case 'primary':
          return (
            <PrimarySolidButton onClick={onClick} className={className}>
              {children}
            </PrimarySolidButton>
          )
        case 'primary-dark':
          return (
            <PrimaryDarkButton onClick={onClick} className={className}>
              {children}
            </PrimaryDarkButton>
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
