import tw from 'tailwind-styled-components'

interface ContainerProps {
  fluid?: boolean
}

const Container = tw.span<ContainerProps>`
  w-full
  mx-auto
  flex
  flex-col
  justify-center
  items-center
  px-1
  md:px-2
  2xl:px-0
  ${p => (!p.fluid ? 'max-w-7xl' : 'w-full')}
`

Container.defaultProps = {
  fluid: false,
}

export { Container }
