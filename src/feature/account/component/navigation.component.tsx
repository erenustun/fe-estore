import { Divider, H2, NavLink } from '@component'
import {
  HomeIcon,
  ListBulletIcon,
  UserCircleIcon as UserIcon,
} from '@heroicons/react/20/solid'
import { FormattedMessage } from 'react-intl'
import { routeConfig, themeConfig } from '@shared/config'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import cn from 'classnames'

export const AccountNavigation = () => {
  const router = useRouter()
  return (
    <section className="mb-8 flex hidden w-11/12 flex-col space-y-3 md:block">
      <H2
        className={cn(
          'flex cursor-pointer items-center',
          themeConfig.bodyTextColor,
          themeConfig.infoTextActive,
          themeConfig.animationTransition,
          themeConfig.animationDuration,
          themeConfig.animationEaseIn
        )}
        onClick={() => router.back()}
      >
        <ArrowLeftCircleIcon className="mr-2 h-5 w-5" />
        <FormattedMessage id="header_navigation_user_account" />
      </H2>
      <Divider />
      <NavLink
        href={routeConfig.ACCOUNT.INDEX}
        label={<FormattedMessage id="account_navigation_details" />}
        icon={<UserIcon className="mr-1 h-4 w-4" />}
      />
      <NavLink
        href={routeConfig.ACCOUNT.ORDER.INDEX}
        label={<FormattedMessage id="account_navigation_orders" />}
        icon={<ListBulletIcon className="mr-1 h-4 w-4" />}
      />
      <NavLink
        href={routeConfig.ACCOUNT.ADDRESS.INDEX}
        label={<FormattedMessage id="account_navigation_address" />}
        icon={<HomeIcon className="mr-1 h-4 w-4" />}
      />
    </section>
  )
}
