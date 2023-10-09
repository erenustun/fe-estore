import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'

export const H1 = tw.h1`
  ${() => themeConfig.h1Size}
  ${() => themeConfig.bodyTextColor}
  ${() => themeConfig.animationTransition}
  ${() => themeConfig.animationDuration}
  ${() => themeConfig.animationEaseIn}
  font-semibold
  tracking-wide
  mb-1
 `
