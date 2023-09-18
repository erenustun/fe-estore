import { Container, H2 } from '@component'
import { routeConfig, themeConfig } from '@shared/config'
import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { AddressView } from '@feature/address'
import cn from 'classnames'
import { OrdersView } from '@feature/order'
import { DetailView, AccountNavigation } from '@feature/account'

export const AccountView = () => {
  const { pathname } = useRouter()
  const isMainPage =
    pathname === routeConfig.ACCOUNT.INDEX ||
    pathname === routeConfig.ACCOUNT.ADDRESS.INDEX ||
    pathname === routeConfig.ACCOUNT.ORDER.INDEX

  const renderSection = useCallback(() => {
    switch (pathname) {
      case routeConfig.ACCOUNT.INDEX:
        return <DetailView />
      case routeConfig.ACCOUNT.ADDRESS.INDEX:
        return <AddressView />
      case routeConfig.ACCOUNT.ORDER.INDEX:
        return <OrdersView />
      default:
        return <H2>MVP</H2>
    }
  }, [pathname])

  return (
    <Container className="min-h-[62rem] flex-row py-5">
      {isMainPage && <AccountNavigation />}
      {!isMainPage && <div className="flex w-64 self-start"></div>}
      <section className={cn('w-4/5 pl-5', themeConfig.boxMargin)}>
        {renderSection()}
      </section>
    </Container>
  )
}
