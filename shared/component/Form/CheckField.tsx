import { ReactNode } from 'react'
import { FlexBox } from '@shared/component'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import cn from 'classnames'
import { themeConfig } from '@shared/config'

interface CheckFieldProps {
  active: boolean
  className?: string
  label?: ReactNode | string | number
  value: number | string
}

export const CheckField = ({
  active,
  className,
  label,
  value,
}: CheckFieldProps) => (
  <FlexBox
    className={cn(
      'w-full cursor-pointer select-none items-center',
      className,
      themeConfig.bodyTextColor,
      themeConfig.infoTextHover,
      themeConfig.infoTextActive,
      themeConfig.animationTransition,
      themeConfig.animationDuration,
      themeConfig.animationEaseIn
    )}
  >
    <FlexBox className="items-center">
      {active ? (
        <CheckCircleIcon className="h-5 w-5 text-teal-300" />
      ) : (
        <div className="ml-1 h-4 w-4 rounded-full border-2 border-slate-800 bg-transparent" />
      )}
    </FlexBox>
    <p className="ml-2 mt-1 text-sm leading-normal">{label ?? value}</p>
  </FlexBox>
)
