import Image from 'next/image'
import {
  BookmarkIcon,
  ShoppingCartIcon,
  TagIcon,
  HashtagIcon,
  BuildingStorefrontIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'
import { NavLink } from '@components/NavLink'
import Link from 'next/link'
import tw from 'tailwind-styled-components'
import { Badge } from '@components/Badge'
import { NavigationDropdown } from '@components/NavigationDropdown'
import { Button } from '@components/Button'
import { Container } from '@components/Container'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { animated, useSpring } from '@react-spring/web'
import { useCookies } from 'react-cookie'

const HeaderTW = tw.div`
  h-18
  bg-slate-900
`

const NavTW = tw.div`
  hidden
  md:flex
  space-x-10
  mr-10
`

export const Header = () => {
  const [isAuth, setAuth] = useState<boolean>(false)
  const router = useRouter()
  const [accountDropdown, setAccDropdown] = useState<boolean>(false)
  const toggleAccountMenu = () => setAccDropdown(!accountDropdown)
  const [cookies, setCookie, removeCookie] = useCookies(['jwt'])

  useEffect(() => {
    if (typeof localStorage !== 'undefined') setAuth(!!cookies['jwt'])
  }, [cookies])

  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
    default: {},
  })

  return (
    <HeaderTW>
      <Container className="flex flex-row items-center justify-between">
        <Link href="/">
          <Image
            src="/images/web_store_hub_logo_info-blue.png"
            alt="e-commerce store logo"
            width="250"
            height="0"
          />
        </Link>
        <NavTW>
          <NavLink
            label="Home"
            href="/products"
            icon={<HomeIcon className="h-4 mr-1" />}
          />
          <NavLink
            label="Shop"
            href="/products"
            icon={<BuildingStorefrontIcon className="h-4 mr-1" />}
          />
          <NavigationDropdown
            label="Categories"
            list={[
              { label: 'Laptops', href: 'products/category/laptop' },
              {
                label: 'Mobile Phones',
                href: 'products/category/smartphone',
              },
            ]}
            icon={<TagIcon className="h-4 mr-1" />}
          />
          <NavigationDropdown
            label="Brands"
            list={[
              { label: 'Apple', href: 'products/brand/apple' },
              { label: 'Samsung', href: 'products/brand/samsung' },
              { label: 'Xiaomi', href: 'products/brand/xiaomi' },
              { label: 'OnePlus', href: 'products/brand/oneplus' },
            ]}
            icon={<HashtagIcon className="h-4 mr-1" />}
          />
        </NavTW>
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
            {isAuth ? (
              <div className="relative">
                <div
                  className="flex items-center justify-center rounded-full h-7 w-7 cursor-pointer"
                  onClick={toggleAccountMenu}
                >
                  <Image
                    src="https://i.pravatar.cc/301"
                    alt="user avatar"
                    width="32"
                    height="32"
                    className="bg-cover bg-center rounded-full"
                  />
                </div>
                {accountDropdown && (
                  <animated.div
                    style={{
                      width: 80,
                      height: 80,
                      background: '#ff6d6d',
                      borderRadius: 8,
                      ...springs,
                    }}
                  >
                    <div className="absolute bottom-0 right-0 -mb-32 bg-blue-900 rounded w-28 translate-y-0">
                      <ul className="flex flex-col">
                        <li className="w-full px-5 py-2 rounded-t hover:bg-blue-950 select-none cursor-pointer transition duration-200 ease-in">
                          Account
                        </li>
                        <li className="w-full px-5 py-2 hover:bg-blue-950 select-none cursor-pointer transition duration-200 ease-in">
                          Orders
                        </li>
                        <li
                          className="w-full px-5 py-2 rounded-b hover:bg-blue-950 select-none cursor-pointer transition duration-200 ease-in"
                          onClick={() => {
                            removeCookie('jwt')
                            router.push('/products')
                          }}
                        >
                          Sign out
                        </li>
                      </ul>
                    </div>
                  </animated.div>
                )}
              </div>
            ) : (
              <Link href={'/auth/sign-in'}>
                <Button $style="info">Sign in</Button>
              </Link>
            )}
          </section>
        </div>
      </Container>
    </HeaderTW>
  )
}
