import Image from 'next/image'
import { BuildingStorefrontIcon, HomeIcon } from '@heroicons/react/24/outline'
import { Container, NavLink } from '@component'
import Link from 'next/link'
import tw from 'tailwind-styled-components'
import { HeaderAuthConditionComponent } from '@feature/auth/component/header-auth-condition.component'
import { routeConfig, themeConfig } from '@shared/config'
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
        <Link href={routeConfig.HOME}>
          <Image
            src="/images/web_store_hub_logo_info-blue.png"
            alt="e-commerce store logo"
            width="250"
            height="50"
          />
        </Link>
        <NavTW>
          <NavLink
            href={routeConfig.HOME}
            icon={<HomeIcon className="mr-1 h-4" />}
            label={intl.formatMessage({ id: 'header_navigation_home' })}
            mainHeader
          />
          <NavLink
            href={routeConfig.PRODUCT.INDEX}
            icon={<BuildingStorefrontIcon className="mr-1 h-4" />}
            label={intl.formatMessage({ id: 'header_navigation_products' })}
            mainHeader
          />
        </NavTW>
        <div className="flex items-center">
          <section className="flex items-center space-x-5">
            <HeaderAuthConditionComponent />
          </section>
        </div>
      </Container>
    </HeaderTW>
  )
}
