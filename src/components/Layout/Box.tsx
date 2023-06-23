import tw from 'tailwind-styled-components'
import { themeConfig } from '@src/config/theme.config'

export const Box = tw.section`
  w-3/5
  mx-auto
  ${() => themeConfig.boxBlur}
  ${() => themeConfig.boxBackgroundColor}
  ${() => themeConfig.boxOpacity}
  ${() => themeConfig.boxPadding}
  ${() => themeConfig.boxShadow}
  ${() => themeConfig.radiusMedium}
`
