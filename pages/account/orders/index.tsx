import { AccountView } from '@feature/account'
import { useIntl } from 'react-intl'
import Head from 'next/head'

const AccountOrders = () => {
  const intl = useIntl()
  return (
    <>
      <Head>
        <title>
          {intl.formatMessage({ id: 'navigation_orders' })} -{' '}
          {intl.formatMessage({ id: 'app_slogan' })} -{' '}
          {intl.formatMessage({ id: 'app_domain' })}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AccountView />
    </>
  )
}
export default AccountOrders
