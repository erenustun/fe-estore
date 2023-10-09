import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'

interface H4Props {
  className?: string
}

export const H4 = tw.h4<H4Props>`
  ${() => themeConfig.h4Size}
  ${() => themeConfig.headingColor}
  ${() => themeConfig.animationTransition}
  ${() => themeConfig.animationDuration}
  ${() => themeConfig.animationEaseIn}
  ${props => props.className && props.className}
  font-light
  tracking-wide
  mb-1
`
