import Link from 'next/link'
import { Button, Dropdown } from '@component'
import { routeConfig } from '@shared/config'
import useAuthStore from '@feature/auth/state/auth.store'
import { getCookie } from 'react-use-cookie'
import { FormattedMessage } from 'react-intl'
import { useEffect } from 'react'
import {
  ArrowLeftOnRectangleIcon,
  ListBulletIcon,
  UserIcon,
} from '@heroicons/react/20/solid'
import { pushUri } from '@shared/util'
import Image from 'next/image'

export const HeaderAuthConditionComponent = () => {
  const { token, reset, signOut } = useAuthStore(state => state)
  const jwt = getCookie('token')

  const accountMenuList = [
    {
      intl: 'header_navigation_user_account',
      href: routeConfig.ACCOUNT.INDEX,
      preItemComponent: () => <UserIcon className="h-4 w-4" />,
    },
    {
      intl: 'header_navigation_user_orders',
      href: routeConfig.ACCOUNT.ORDER.INDEX,
      preItemComponent: () => <ListBulletIcon className="h-4 w-4" />,
    },
    {
      onClick: () => signOut().then(() => pushUri(routeConfig.HOME)),
      intl: 'header_navigation_user_sign_out',
      preItemComponent: () => <ArrowLeftOnRectangleIcon className="h-4 w-4" />,
    },
  ]

  // check for missing token cookie and reset client state in-case
  useEffect(() => {
    !jwt && reset()
  }, [jwt, reset])

  return !getCookie('token') && getCookie('token').length === 0 && !token ? (
    <Link href={routeConfig.ACCOUNT.AUTH.SIGN_IN}>
      <Button>
        <FormattedMessage id="auth_form_login" />
      </Button>
    </Link>
  ) : (
    <div className="relative">
      {/*<AccountDropdownComponent />*/}
      <Dropdown
        label={
          <span className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
            <Image
              src="https://i.pravatar.cc/301"
              alt="user avatar"
              width="32"
              height="32"
              className="rounded-full bg-cover bg-center"
            />
          </span>
        }
        list={accountMenuList}
      />
    </div>
  )
}
