import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'

const Box = tw.section<{ darkborder?: boolean }>`
  w-full
  mx-auto
  ${props => (props.darkborder ? 'border-gray-700' : 'border-gray-400')}
  ${() => themeConfig.mainContainerMaxWidth}
  ${() => themeConfig.boxBlur}
  ${() => themeConfig.boxBackgroundColor}
  ${() => themeConfig.boxOpacity}
  ${() => themeConfig.boxPadding}
  ${() => themeConfig.boxMargin}
  ${() => themeConfig.boxShadow}
  ${() => themeConfig.radiusMedium}
`

Box.defaultProps = {
  darkborder: false,
}

export { Box }
