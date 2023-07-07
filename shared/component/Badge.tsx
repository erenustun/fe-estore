import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'

const Badge = tw.div<{ rounded?: boolean; wide?: boolean }>`
  font-semibold
  text-xs
  flex
  items-center
  justify-center
  select-none
  ${() => themeConfig.badgeBackgroundColor}
  ${props => (props.rounded ? 'rounded-full' : 'rounded-lg')}
  ${props => (props.wide ? 'w-[2rm]' : '')}
`

Badge.defaultProps = {
  rounded: true,
  wide: false,
}

export { Badge }
