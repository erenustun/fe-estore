import tw from 'tailwind-styled-components'
import { themeConfig } from '@src/config/theme.config'

const Badge = tw.div<{ rounded?: boolean }>`
  font-semibold
  text-xs
  flex
  items-center
  justify-center
  select-none
  ${() => themeConfig.badgeBackgroundColor}
  ${props => (props.rounded ? 'rounded-full' : 'rounded-md')}
`

Badge.defaultProps = {
  rounded: true,
}

export { Badge }
