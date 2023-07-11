import { Badge, Box, NavLink } from '@component'
import {
  HomeIcon,
  ListBulletIcon,
  LockClosedIcon,
  UserCircleIcon as UserIcon,
} from '@heroicons/react/20/solid'
import { FormattedMessage } from 'react-intl'
import { routeConfig } from '@shared/config'

export const AccountNavigation = () => (
  <Box className="flex flex-col space-y-5 w-60 self-start mt-[4.3rem]">
    <NavLink
      href={routeConfig.ACCOUNT.INDEX}
      label={<FormattedMessage id="account_navigation_details" />}
      icon={<UserIcon className="h-4 w-4" />}
    />
    <NavLink
      href="/account/orders"
      label={
        <div className="flex">
          <FormattedMessage id="account_navigation_orders" />
          <Badge wide rounded={false} className="ml-2 h-6 w-7">
            <FormattedMessage id="app_wip" />
          </Badge>
        </div>
      }
      icon={<ListBulletIcon className="h-4 w-4" />}
    />
    <NavLink
      href={routeConfig.ACCOUNT.ADDRESS.INDEX}
      label={<FormattedMessage id="account_navigation_address" />}
      icon={<HomeIcon className="h-4 w-4" />}
    />
    <NavLink
      href="/account/security"
      label={
        <div className="flex">
          <span>Password and Security</span>
          <Badge wide rounded={false} className="ml-2 h-6 w-7">
            <FormattedMessage id="app_wip" />
          </Badge>
        </div>
      }
      icon={<LockClosedIcon className="h-4 w-4" />}
    />
  </Box>
)
