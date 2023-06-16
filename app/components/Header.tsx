import Image from 'next/image'
import {
  BookmarkIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid'
import { NavLink } from '@app/components/NavLink'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between">
      <div className="flex items-center justify-between w-3/5">
        <Link href="/">
          <Image
            src="/images/web_store_hub_logo.png"
            alt="e-commerce store logo"
            width="250"
            height="0"
          />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <NavLink label="Home" href="/" />
          <NavLink label="Products" href="/products" />
          <NavLink label="Categories" href="/categories" dropDown />
          <NavLink label="Brands" href="/brands/Apple" dropDown />
        </nav>
      </div>
      <div className="flex items-center">
        <section className="flex space-x-6 items-center">
          <div className="flex items-center justify-center bg-slate-400 rounded-full h-8 w-8">
            <BookmarkIcon className="h-6 text-gray-700" />
          </div>
          <div className="flex items-center justify-center bg-slate-400 rounded-full h-8 w-8">
            <ShoppingCartIcon className="h-6 text-gray-700" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center bg-slate-400 rounded-full h-8 w-8">
              <UserCircleIcon className="h-6 text-gray-700" />
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-sm text-slate-400">Hi, Welcome!</span>
              <span className="text-base font-medium">Jane Doe</span>
            </div>
          </div>
        </section>
      </div>
    </header>
  )
}
