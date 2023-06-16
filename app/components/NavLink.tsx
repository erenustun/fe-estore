import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

interface NavLinkProps {
  label: string
  href: string
  dropDown?: boolean
}

export const NavLink = ({ label, href, dropDown = false }: NavLinkProps) => {
  return (
    <Link href={href} className="flex items-center font-semibold">
      {label} {dropDown && <ChevronDownIcon className="h-5 ml-1" />}
    </Link>
  )
}
