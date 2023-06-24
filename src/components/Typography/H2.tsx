import tw from 'tailwind-styled-components'
import { themeConfig } from '@src/config/theme.config'

export const H2 = tw.h2`
  ${() => themeConfig.textSizeH2}
  font-light
  tracking-wide
  mb-3
`
