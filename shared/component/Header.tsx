import Image from 'next/image'
import {
  BookmarkIcon,
  ShoppingCartIcon,
  HashtagIcon,
  BuildingStorefrontIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'
import {
  Badge,
  Container,
  NavigationDropdown,
  NavLink,
  LanguageChange,
} from '@component'
import Link from 'next/link'
import tw from 'tailwind-styled-components'
import { HeaderAuthConditionComponent } from '@feature/auth/components/header-auth-condition.component'
import { themeConfig } from '@shared/config'
import cn from 'classnames'
import { useIntl } from 'react-intl'

const HeaderTW = tw.div`
  flex
  items-center
  justify-center
  ${() => themeConfig.headerHeight}
  ${() => themeConfig.headerShadow}
  ${() => themeConfig.headerBackgroundColor}
`

const NavTW = tw.div`
  hidden
  md:flex
  space-x-10
  mr-10
`

export const Header = () => {
  const intl = useIntl()

  return (
    // TODO: add useSpring for mobile navigation like --> transform: isVisible ? 'translate3D(0,10px,0)' : 'translate3D(0,120px,0)',

    <HeaderTW>
      <Container className="flex flex-row items-center justify-between">
        <Link href="/">
          <Image
            src="/images/web_store_hub_logo_info-blue.png"
            alt="e-commerce store logo"
            width="250"
            height="50"
          />
        </Link>
        <NavTW>
          <NavLink
            label={intl.formatMessage({ id: 'header_navigation_home' })}
            href="/"
            icon={<HomeIcon className="h-4 mr-1" />}
          />
          <NavigationDropdown
            label={intl.formatMessage({ id: 'header_navigation_shop' })}
            list={[
              {
                label: intl.formatMessage({ id: 'header_navigation_laptops' }),
                href: 'products/category/laptop',
              },
              {
                label: intl.formatMessage({ id: 'header_navigation_phones' }),
                href: 'products/category/smartphone',
              },
            ]}
            icon={<BuildingStorefrontIcon className="h-4 mr-1" />}
          />
          <NavigationDropdown
            label={intl.formatMessage({ id: 'header_navigation_brands' })}
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
            <LanguageChange />
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
              <Badge className="absolute top-0 right-0 -mt-2 -mr-2 h-4 w-4">
                9
              </Badge>
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
              <Badge className="absolute top-0 right-0 -mt-2 -mr-2 h-4 w-4">
                2
              </Badge>
            </div>
            <HeaderAuthConditionComponent />
          </section>
        </div>
      </Container>
    </HeaderTW>
  )
}
