import { PropsWithChildren } from 'react'
import { FlexBox } from '@shared/component'
import { themeConfig } from '@shared/config'

interface AnimateInProps {
  show: boolean
  direction: 'to-top' | 'to-right' | 'to-bottom' | 'to-left'
}

export const AnimateIn = ({
  children,
  show,
  direction = 'to-right',
}: PropsWithChildren<AnimateInProps>) => (
  <FlexBox
    className={`gap-x-4 rounded transition duration-300 ease-in-out ${
      /*show*/ direction === 'to-top'
        ? `${themeConfig.animationStartToTop} z-10 opacity-100`
        : direction === 'to-right'
        ? `${themeConfig.animationStartToRight} z-10 opacity-100`
        : direction === 'to-bottom'
        ? `${themeConfig.animationStartToBottom} z-10 opacity-100`
        : direction === 'to-left'
        ? `${themeConfig.animationStartToLeft} z-10 opacity-100`
        : null
    }`}
  >
    {children}
  </FlexBox>
)
