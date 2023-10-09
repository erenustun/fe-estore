import { PropsWithChildren } from 'react'
import { FlexBox } from '@shared/component'
import { themeConfig } from '@shared/config'

interface AnimateInProps {
  direction: 'to-top' | 'to-right' | 'to-bottom' | 'to-left'
  show: boolean
}

export const AnimateIn = ({
  children,
  direction = 'to-right',
  show,
}: PropsWithChildren<AnimateInProps>) => (
  <FlexBox
    className={`gap-x-4 rounded transition duration-300 ease-in-out ${
      show
        ? direction === 'to-top'
          ? `${themeConfig.animationStartToTop} z-10 opacity-100`
          : direction === 'to-right'
          ? `${themeConfig.animationStartToRight} z-10 opacity-100`
          : direction === 'to-bottom'
          ? `${themeConfig.animationStartToBottom} z-10 opacity-100`
          : direction === 'to-left'
          ? `${themeConfig.animationStartToLeft} z-10 opacity-100`
          : null
        : direction === 'to-top'
        ? `${themeConfig.animationEndToTop} z-10 opacity-0`
        : direction === 'to-right'
        ? `${themeConfig.animationEndToRight} z-10 opacity-0`
        : direction === 'to-bottom'
        ? `${themeConfig.animationEndToBottom} z-10 opacity-0`
        : direction === 'to-left'
        ? `${themeConfig.animationEndToLeft} z-10 opacity-0`
        : null
    }`}
  >
    {show && children}
  </FlexBox>
)
