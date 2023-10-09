import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'

interface LayoutProps {
  className?: string
}

export const Layout = tw.section<LayoutProps>`
  ${() => themeConfig.mainBackgroundColor}
  ${() => themeConfig.bodyTextColor}
  w-full
  mx-auto
  flex
  flex-col
  ${props => props.className && props.className}
`
