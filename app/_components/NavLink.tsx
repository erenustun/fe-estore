'use client'
import Link from 'next/link'
import { ReactNode } from 'react'
import tw from 'tailwind-styled-components'
import { Url } from 'url'

interface NavLinkProps {
  label: string | ReactNode
  href: Url | string
  icon?: ReactNode | string | null
}

const LinkWrapper = tw.span`
  flex
  items-center
  text-slate-50
  hover:text-blue-300
  active:text-blue-500
  transition
  ease-in
  duration-200
`

const LinkLabel = tw.p`
  font-semibold
  select-none
  flex
  items-center
`

export const NavLink = ({ label, href, icon }: NavLinkProps) => {
  return (
    <Link href={href} className="flex items-center cursor-pointer select-none">
      <LinkWrapper>
        <LinkLabel>
          {icon && icon} {label}
        </LinkLabel>
      </LinkWrapper>
    </Link>
  )
}
