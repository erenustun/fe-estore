import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'

export const H4 = tw.h4`
  ${() => themeConfig.textSizeH4}
  font-light
  tracking-wide
  mb-1
`
