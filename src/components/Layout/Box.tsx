import tw from 'tailwind-styled-components'
import { themeConfig } from '@src/config/theme.config'

export const Box = tw.section`
  w-full
  mx-auto
  ${() => themeConfig.mainContainerMaxWidth}
  ${() => themeConfig.boxBlur}
  ${() => themeConfig.boxBackgroundColor}
  ${() => themeConfig.boxOpacity}
  ${() => themeConfig.boxPadding}
  ${() => themeConfig.boxShadow}
  ${() => themeConfig.radiusMedium}
`
