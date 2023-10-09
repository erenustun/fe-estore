import Link from 'next/link'
import { ReactNode } from 'react'
import tw from 'tailwind-styled-components'
import { Url } from 'url'
import { themeConfig } from '@shared/config'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { FlexBox } from '@shared/component/Layout/FlexBox'

interface NavLinkProps {
  as?: string
  className?: string
  href: Url | string
  icon?: ReactNode | string | null
  label: string | ReactNode
  mainHeader?: boolean
}

const LinkWrapper = tw.span`
  flex
  flex-col
  items-center
  space-x-1
  font-medium
  select-none
  ${() => themeConfig.mainTextColor}
  ${() => themeConfig.navLinkTextHover}
  ${() => themeConfig.navLinkTextActive}
  ${() => themeConfig.animationTransition}
  ${() => themeConfig.animationDuration}
  ${() => themeConfig.animationEaseIn}
`

export const NavLink = ({
  as,
  className,
  href,
  icon,
  label,
  mainHeader = false,
}: NavLinkProps) => {
  const router = useRouter()

  return (
    <Link
      href={href}
      as={as}
      className={' flex cursor-pointer select-none items-center'}
    >
      <LinkWrapper
        className={cn(
          router.pathname === href && themeConfig.navLinkCurrentPage,
          router.pathname === href && 'font-semibold',
          className,
          'group'
        )}
      >
        <FlexBox className="items-center">
          {icon && <div className="mr-0.5">{icon}</div>}
          <div>{label}</div>
        </FlexBox>
        {mainHeader && router.pathname === href && (
          <div
            className={cn(
              'rounde mt-[1px] h-[2px] w-full',
              themeConfig.navLinkBgHover,
              themeConfig.navLinkBgActive,
              themeConfig.navLinkCurrentBg
            )}
          ></div>
        )}
      </LinkWrapper>
    </Link>
  )
}
