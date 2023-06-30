import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'

export const H3 = tw.h3`
  ${() => themeConfig.textSizeH3}
  font-light
  tracking-wide
  mb-1
`
