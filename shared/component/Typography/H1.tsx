import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'

export const H1 = tw.h1`
  ${() => themeConfig.textSizeH1}
  font-light
  tracking-wide
  mb-1
 `
