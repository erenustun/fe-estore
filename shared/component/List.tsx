import { H2 } from '@shared/component'
import { FormattedMessage } from 'react-intl'
import { ApolloError } from '@apollo/client'
import cn from 'classnames'
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from '@heroicons/react/24/solid'
import theme from 'tailwindcss/defaultTheme'
import { themeConfig } from '@shared/config'
import { ReactNode } from 'react'

interface ListProps {
  className?: string
  error?: ApolloError | string
  isNav?: boolean
  labelLocale?: string
  list: ListItemProps[]
  loading?: boolean
  onClick?: (label: string | number) => void
}

interface ListItemProps {
  label?: ReactNode | string | number | null
  onClick?: () => void
  isParent?: boolean
  value?: number | string
}

export const List = ({
  className,
  error,
  isNav = false,
  labelLocale,
  list,
  loading,
  onClick,
}: ListProps) => {
  if (loading) {
    return (
      <>
        <div className="mb-3 h-6 w-3/5 animate-pulse rounded-sm bg-gray-800"></div>
        <div className="space-y-1.5">
          <div className="h-3 w-36 animate-pulse rounded-sm bg-gray-800"></div>
          <div className="h-3 w-44 animate-pulse rounded-sm bg-gray-800"></div>
          <div className="h-3 w-40 animate-pulse rounded-sm bg-gray-800"></div>
          <div className="h-3 w-28 animate-pulse rounded-sm bg-gray-800"></div>
          <div className="h-3 w-36 animate-pulse rounded-sm bg-gray-800"></div>
        </div>
      </>
    )
  }

  if (error) return null

  return (
    <div className={className}>
      {labelLocale && (
        <H2 className="mb-2">
          <FormattedMessage id={labelLocale} />
        </H2>
      )}
      <ul
        className={cn(
          'select-none space-y-1 tracking-wide',
          isNav && 'w-full space-y-1.5'
        )}
      >
        {list?.map((listItem, index) => {
          return (
            <li
              key={index}
              className={cn(
                'flex cursor-pointer items-center capitalize',
                isNav && 'w-full items-center justify-between py-2 text-xl',
                themeConfig.bodyTextColor,
                themeConfig.primaryTextHover,
                themeConfig.infoTextActive,
                themeConfig.animationTransition,
                themeConfig.animationDuration,
                themeConfig.animationEaseIn
              )}
              onClick={() =>
                listItem.onClick
                  ? listItem.onClick()
                  : onClick &&
                    onClick(
                      (listItem.value as number) ?? (listItem.label as string)
                    )
              }
            >
              <span>{listItem.label ?? listItem.value}</span>
              {listItem.isParent ? (
                <ArrowUpIcon className="h-6 w-6" />
              ) : isNav ? (
                <ArrowRightIcon className="h-6 w-6" />
              ) : (
                <ArrowDownIcon className="h-6 w-6" />
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
