import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'

export const Box = tw.section`
  w-full
  mx-auto
  ${() => themeConfig.mainContainerMaxWidth}
  ${() => themeConfig.boxBlur}
  ${() => themeConfig.boxBackgroundColor}
  ${() => themeConfig.boxOpacity}
  ${() => themeConfig.boxPadding}
  ${() => themeConfig.boxMargin}
  ${() => themeConfig.boxShadow}
  ${() => themeConfig.radiusMedium}
`
