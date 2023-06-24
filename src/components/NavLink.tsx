import Link from 'next/link'
import { ReactNode } from 'react'
import tw from 'tailwind-styled-components'
import { Url } from 'url'
import { themeConfig } from '@src/config/theme.config'
import { useRouter } from 'next/router'
import cn from 'classnames'

interface NavLinkProps {
  as?: string
  className?: string
  href: Url | string
  icon?: ReactNode | string | null
  label: string | ReactNode
}

const LinkWrapper = tw.span`
  flex
  items-center
  space-x-1
  font-semibold
  select-none
  ${() => themeConfig.mainTextColor}
  ${() => themeConfig.navLinkTextHover}
  ${() => themeConfig.navLinkTextActive}
  ${() => themeConfig.animationTransition}
  ${() => themeConfig.animationDuration}
  ${() => themeConfig.animationEaseIn}
`

export const NavLink = ({ as, className, href, icon, label }: NavLinkProps) => {
  const router = useRouter()

  return (
    <Link
      href={href}
      as={as}
      className={'flex items-center cursor-pointer select-none'}
    >
      <LinkWrapper
        className={cn(
          router.pathname === href && themeConfig.navLinkCurrentPage,
          router.pathname === href && 'font-extrabold',
          className
        )}
      >
        <div>{icon && icon}</div>
        <div>{label}</div>
      </LinkWrapper>
    </Link>
  )
}
