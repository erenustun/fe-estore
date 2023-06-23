import tw from 'tailwind-styled-components'
import { themeConfig } from '@src/config/theme.config'

export const Badge = tw.div`
  absolute
  top-0
  right-0
  -mt-2
  -mr-2
  font-semibold
  h-4
  w-4
  text-xs
  rounded-full
  flex
  items-center
  justify-center
  select-none
  ${() => themeConfig.badgeBackgroundColor}
`
