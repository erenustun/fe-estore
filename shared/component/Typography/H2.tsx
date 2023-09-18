import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'

interface H2Props {
  className?: string
}

export const H2 = tw.h2<H2Props>`
  ${() => themeConfig.textSizeH2}
  ${props => props.className && props.className}
  font-light
  tracking-wide
  mb-3
`
