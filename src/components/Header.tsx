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
import { Container } from '@components/Layout/Container'
import { HeaderAuthConditionComponent } from '@src/features/auth/components/header-auth-condition.component'
import { themeConfig } from '@src/config/theme.config'
import cn from 'classnames'

const HeaderTW = tw.div`
  h-18
  ${() => themeConfig.headerBackgroundColor}
`

const NavTW = tw.div`
  hidden
  md:flex
  space-x-10
  mr-10
`

export const Header = () => (
  <HeaderTW>
    <Container className="flex flex-row items-center justify-between">
      <Link href="/" as="/home">
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
          href="/"
          as="/home"
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
            <BookmarkIcon
              className={cn(
                'h-6 w-6',
                themeConfig.navLinkTextHover,
                themeConfig.navLinkTextActive,
                themeConfig.animationTransition,
                themeConfig.animationDuration,
                themeConfig.animationEaseIn
              )}
            />
            <Badge>9</Badge>
          </div>
          <div className="relative cursor-pointer">
            <ShoppingCartIcon
              className={cn(
                'h-6 w-6',
                themeConfig.navLinkTextHover,
                themeConfig.navLinkTextActive,
                themeConfig.animationTransition,
                themeConfig.animationDuration,
                themeConfig.animationEaseIn
              )}
            />
            <Badge>2</Badge>
          </div>
          <HeaderAuthConditionComponent />
        </section>
      </div>
    </Container>
  </HeaderTW>
)
