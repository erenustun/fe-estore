import { Container, FlexBox, H2, Sidebar } from '@component'
import { routeConfig, themeConfig } from '@shared/config'
import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { AddressView } from '@feature/address'
import cn from 'classnames'
import { OrderView } from '@feature/order'
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
        return <OrderView />
      default:
        return <H2>MVP</H2>
    }
  }, [pathname])

  return (
    <Container className="min-h-[62rem] flex-row pt-8">
      <FlexBox
        direction="col"
        className={themeConfig.sidebarWidth + ' hidden md:block'}
      >
        {isMainPage && <AccountNavigation />}
        <Sidebar className="w-full" withCart={true} />
      </FlexBox>
      {!isMainPage && <div className="flex w-64 self-start"></div>}
      <section className={cn('w-full px-3 md:w-4/5')}>
        {renderSection()}
      </section>
    </Container>
  )
}
