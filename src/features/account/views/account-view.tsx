import { Box } from '@components/Layout/Box'
import { Container } from '@components/Layout/Container'
import { Badge, H2, NavLink } from '@src/components'
import {
  UserCircleIcon as UserIcon,
  LockClosedIcon,
  ListBulletIcon,
  HomeIcon,
} from '@heroicons/react/20/solid'
import { routeConfig } from '@src/config/route.config'
import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { AccountAddress } from '@src/features/account/components/Address/view-address.component'
import cn from 'classnames'
import { themeConfig } from '@src/config/theme.config'

export const AccountView = () => {
  const { pathname } = useRouter()
  const isMainPage =
    pathname === routeConfig.ACCOUNT.INDEX || routeConfig.ACCOUNT.ADDRESS.INDEX

  const renderSection = useCallback(() => {
    switch (pathname) {
      case routeConfig.ACCOUNT.ADDRESS.INDEX:
        return <AccountAddress />
      default:
        return <H2>MVP</H2>
    }
  }, [pathname])

  return (
    <Container className="flex-row min-h-[62rem]">
      {isMainPage && (
        <Box className="flex flex-col space-y-5 w-60 self-start">
          <NavLink
            href="/account/details"
            label={
              <div className="flex">
                <span>Account details</span>
                <Badge rounded={false} className="ml-2 h-6 w-7">
                  WIP
                </Badge>
              </div>
            }
            icon={<UserIcon className="h-5 w-5" />}
          />
          <NavLink
            href="/account/orders"
            label={
              <div className="flex">
                <span>View my orders</span>
                <Badge rounded={false} className="ml-2 h-6 w-7">
                  WIP
                </Badge>
              </div>
            }
            icon={<ListBulletIcon className="h-5 w-5" />}
          />
          <NavLink
            href="/account/address"
            label="Manage addresses"
            icon={<HomeIcon className="h-5 w-5" />}
          />
          <NavLink
            href="/account/security"
            label={
              <div className="flex">
                <span>Password and Security</span>
                <Badge rounded={false} className="ml-2 h-6 w-7">
                  WIP
                </Badge>
              </div>
            }
            icon={<LockClosedIcon className="h-5 w-5" />}
          />
        </Box>
      )}
      {!isMainPage && <div className="w-60 self-start"></div>}
      <section className={cn('w-4/5 pl-4', themeConfig.boxMargin)}>
        {renderSection()}
      </section>
    </Container>
  )
}
