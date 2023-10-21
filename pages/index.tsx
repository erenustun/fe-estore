import { HomeView } from '@feature/home'
import Head from 'next/head'
import { useIntl } from 'react-intl'

const Home = () => {
  const intl = useIntl()

  return (
    <>
      <Head>
        <title>
          {intl.formatMessage({ id: 'header_navigation_home' })} -{' '}
          {intl.formatMessage({ id: 'app_slogan' })} -{' '}
          {intl.formatMessage({ id: 'app_domain' })}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomeView />
    </>
  )
}

export default Home
