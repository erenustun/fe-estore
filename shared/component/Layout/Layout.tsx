import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'

export const Layout = tw.section`
  ${() => themeConfig.mainBackgroundColor}
  ${() => themeConfig.mainTextColor}
  w-full
  mx-auto
  flex
  flex-col
`
