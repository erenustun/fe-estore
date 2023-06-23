import Link from 'next/link'
import { ReactNode } from 'react'
import tw from 'tailwind-styled-components'
import { Url } from 'url'
import { themeConfig } from '@src/config/theme.config'

interface NavLinkProps {
  as?: string
  href: Url | string
  icon?: ReactNode | string | null
  label: string | ReactNode
}

const LinkWrapper = tw.span`
  flex
  items-center
  ${() => themeConfig.mainTextColor}
  ${() => themeConfig.navLinkTextHover}
  ${() => themeConfig.navLinkTextActive}
  ${() => themeConfig.animationTransition}
  ${() => themeConfig.animationDuration200}
  ${() => themeConfig.animationEaseIn}
`

const LinkLabel = tw.p`
  font-semibold
  select-none
  flex
  items-center
`

export const NavLink = ({ as, href, icon, label }: NavLinkProps) => {
  return (
    <Link
      href={href}
      as={as}
      className="flex items-center cursor-pointer select-none"
    >
      <LinkWrapper>
        <LinkLabel>
          {icon && icon} {label}
        </LinkLabel>
      </LinkWrapper>
    </Link>
  )
}
