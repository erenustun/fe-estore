import { Box, NavLink } from '@component'
import {
  HomeIcon,
  ListBulletIcon,
  UserCircleIcon as UserIcon,
} from '@heroicons/react/20/solid'
import { FormattedMessage } from 'react-intl'
import { routeConfig } from '@shared/config'

export const AccountNavigation = () => (
  <Box className="flex w-60 flex-col space-y-3 self-start">
    <NavLink
      href={routeConfig.ACCOUNT.INDEX}
      label={<FormattedMessage id="account_navigation_details" />}
      icon={<UserIcon className="mr-2 h-4 w-4" />}
    />
    <NavLink
      href={routeConfig.ACCOUNT.ORDER.INDEX}
      label={<FormattedMessage id="account_navigation_orders" />}
      icon={<ListBulletIcon className="mr-2 h-4 w-4" />}
    />
    <NavLink
      href={routeConfig.ACCOUNT.ADDRESS.INDEX}
      label={<FormattedMessage id="account_navigation_address" />}
      icon={<HomeIcon className="mr-2 h-4 w-4" />}
    />
  </Box>
)
