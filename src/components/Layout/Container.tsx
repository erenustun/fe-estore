import tw from 'tailwind-styled-components'
import { themeConfig } from '@src/config/theme.config'

interface ContainerProps {
  fluid?: boolean
}

const Container = tw.span<ContainerProps>`
  w-full
  mx-auto
  flex
  flex-col
  justify-start
  items-center
  px-1
  md:px-2
  2xl:px-0
  ${p => (!p.fluid ? themeConfig.mainContainerMaxWidth : 'w-full')}
  ${() => `${themeConfig.mainTextColor}`}
`

Container.defaultProps = {
  fluid: false,
}

export { Container }
