import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'

interface H2Props {
  className?: string
}

export const H2 = tw.h2<H2Props>`
  ${() => themeConfig.h2Size}
  ${() => themeConfig.bodyTextColor}
  ${() => themeConfig.animationTransition}
  ${() => themeConfig.animationDuration}
  ${() => themeConfig.animationEaseIn}
  ${props => props.className && props.className}
  font-normal
  tracking-wide
  mb-3
`
