import Link from 'next/link'
import { ReactNode } from 'react'
import tw from 'tailwind-styled-components'
import { Url } from 'url'
import { themeConfig } from '@shared/config'
import cn from 'classnames'

interface TextLinkProps {
  as?: string
  className?: string
  href?: Url | string
  onClick?: () => void
  icon?: ReactNode | string | null
  label: string | ReactNode
}

const LinkLabel = tw.p`
  select-none
  flex
  items-center
`

const TextLinkWrapper = tw.span`
  flex
  items-center
  text-sm
  ${() => themeConfig.mainTextColor}
  ${() => themeConfig.textLinkTextHover}
  ${() => themeConfig.textLinkTextActive}
  ${() => themeConfig.animationTransition}
  ${() => themeConfig.animationDuration}
  ${() => themeConfig.animationEaseIn}
`

/*self-end mr-auto text-slate-200 hover:text-slate-50 active:text-slate-400*/

export const TextLink = ({
  as,
  className,
  href,
  icon,
  label,
  onClick,
}: TextLinkProps) => {
  return href ? (
    <Link
      href={href}
      as={as}
      className={cn(
        'flex items-center cursor-pointer hover:underline',
        className
      )}
    >
      <TextLinkWrapper>
        <LinkLabel>
          {icon && icon} {label}
        </LinkLabel>
      </TextLinkWrapper>
    </Link>
  ) : (
    <TextLinkWrapper
      onClick={onClick}
      className={cn(
        'flex items-center cursor-pointer hover:underline',
        className
      )}
    >
      <LinkLabel>
        {icon && icon} {label}
      </LinkLabel>
    </TextLinkWrapper>
  )
}
