import Image from 'next/image'
import { BookmarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { NavLink } from '@components/NavLink'
import Link from 'next/link'
import tw from 'tailwind-styled-components'
import { Badge } from '@components/Badge'

const HeaderTW = tw.div`
  flex
  h-20
  items-center
  justify-between
`

const NavTW = tw.div`
  hidden
  md:flex
  space-x-8
`

export const Header = () => {
  return (
    <HeaderTW>
      <div className="flex items-center justify-between w-3/5">
        <Link href="/">
          <Image
            src="/images/web_store_hub_logo_info-blue.png"
            alt="e-commerce store logo"
            width="250"
            height="0"
          />
        </Link>
        <NavTW>
          <NavLink label="Home" href="/" />
          <NavLink label="Products" href="/products" />
          <NavLink label="Categories" href="/categories" />
          <NavLink label="Brands" href="/brands/Apple" />
        </NavTW>
      </div>
      <div className="flex items-center">
        <section className="flex space-x-5 items-center">
          <div className="relative cursor-pointer">
            <BookmarkIcon className="h-6 text-slate-50 hover:text-blue-300 active:text-blue-500" />
            <Badge>9</Badge>
          </div>
          <div className="relative cursor-pointer">
            <ShoppingCartIcon className="h-6 text-slate-50 hover:text-blue-300 active:text-blue-500" />
            <Badge>2</Badge>
          </div>
          <div className="flex items-center justify-center rounded-full h-7 w-7 cursor-pointer">
            <Image
              src="https://i.pravatar.cc/301"
              alt="user avatar"
              width="32"
              height="32"
              className="bg-cover bg-center rounded-full"
            />
          </div>
        </section>
      </div>
    </HeaderTW>
  )
}
