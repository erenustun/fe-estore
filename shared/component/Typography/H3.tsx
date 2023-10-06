import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'

interface H3Props {
  className?: string
}

export const H3 = tw.h3<H3Props>`
  ${() => themeConfig.textSizeH3}
  ${props => props.className && props.className}
  font-light
  tracking-wide
  mb-3
`
