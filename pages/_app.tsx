import '@/public/styles/globals.css'
import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'
import { StyledComponentsRegistry } from '@shared/lib'
import { ApolloProvider } from '@apollo/client'
import { hasHydrated } from '@shared/hook'
import { CookiesProvider, useCookies } from 'react-cookie'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Eng from '@shared/lib/intl/en.json'
import { IntlProvider } from 'react-intl'
import { apolloClient } from '@shared/config'
import { Layout, Footer, Header } from '@component'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { locale } = router
  const hasMounted = hasHydrated()
  const [cookies, setCookie] = useCookies(['locale'])

  useEffect(() => {
    setCookie('locale', locale ? locale.split('-')[0] : 'en', { path: '/' })
  }, [locale])

  return hasMounted ? (
    <CookiesProvider>
      <IntlProvider
        locale={cookies['locale'] as string}
        messages={Eng}
        onError={() => null}
      >
        <StyledComponentsRegistry>
          <ApolloProvider client={apolloClient}>
            <Layout className={inter.className}>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </Layout>
          </ApolloProvider>
        </StyledComponentsRegistry>
      </IntlProvider>
    </CookiesProvider>
  ) : null
}
