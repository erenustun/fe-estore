import tw from 'tailwind-styled-components'
import { themeConfig } from '@src/config/theme.config'

export const H1 = tw.h1`
  ${() => themeConfig.textSizeH1}
  font-light
  tracking-wide
  mb-1
 `
