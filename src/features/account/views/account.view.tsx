import { Container, H2 } from '@component'
import { routeConfig, themeConfig } from '@shared/config'
import { useCallback } from 'react'
import { useRouter } from 'next/router'
//import { AccountAddress } from '@feature/address/components/view-address.component'
import cn from 'classnames'
//import { AccountNavigation } from '@feature/account/components/navigation.component'

export const AccountView = () => {
  const { pathname } = useRouter()
  const isMainPage =
    pathname === routeConfig.ACCOUNT.INDEX ||
    pathname === routeConfig.ACCOUNT.ADDRESS.INDEX

  const renderSection = useCallback(() => {
    switch (pathname) {
      default:
        return <H2>MVP</H2>
    }
  }, [pathname])

  return (
    <Container className="flex-row min-h-[62rem]">
      {/*{isMainPage && <AccountNavigation />}*/}
      {!isMainPage && <div className="flex w-64 self-start"></div>}
      <section className={cn('w-4/5 pl-5', themeConfig.boxMargin)}>
        {renderSection()}
      </section>
    </Container>
  )
}
