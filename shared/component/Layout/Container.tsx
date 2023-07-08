import tw from 'tailwind-styled-components'
import { themeConfig } from '@shared/config'

interface ContainerProps {
  fluid?: boolean
}

const Container = tw.span<ContainerProps>`
  w-full
  mx-auto
  flex
  flex-col
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