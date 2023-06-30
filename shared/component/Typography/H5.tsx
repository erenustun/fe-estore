import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'

export const H5 = tw.h5`
  ${() => themeConfig.textSizeH5}
  font-light
  tracking-wide
  mb-1
`
