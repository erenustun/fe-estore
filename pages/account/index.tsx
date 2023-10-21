import { AccountView } from '@feature/account'
import { useIntl } from 'react-intl'
import Head from 'next/head'

const Account = () => {
  const intl = useIntl()
  return (
    <>
      <Head>
        <title>
          {intl.formatMessage({ id: 'header_navigation_user_account' })} -{' '}
          {intl.formatMessage({ id: 'app_slogan' })} -
          {intl.formatMessage({ id: 'app_domain' })}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AccountView />
    </>
  )
}

export default Account
