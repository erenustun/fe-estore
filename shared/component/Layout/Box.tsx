import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'

interface BoxProps {
  darkborder?: boolean
  notopmargin?: boolean
}

const Box = tw.section<BoxProps>`
  w-full
  mx-auto
  ${props =>
    props.darkborder
      ? 'border-gray-300 dark:border-gray-700'
      : 'border-gray-400'}
  ${props => !props.notopmargin && themeConfig.boxMargin}
  ${() => themeConfig.mainContainerMaxWidth}
  ${() => themeConfig.boxBlur}
  ${() => themeConfig.boxBackgroundColor}
  ${() => themeConfig.boxOpacity}
  ${() => themeConfig.boxPadding}
  ${() => themeConfig.boxShadow}
  ${() => themeConfig.radiusMedium}
`

Box.defaultProps = {
  darkborder: false,
  notopmargin: false,
}

export { Box }
