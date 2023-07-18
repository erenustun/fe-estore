import '@/public/styles/globals.css'
import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'
import { StyledComponentsRegistry } from '@shared/lib'
import { ApolloProvider } from '@apollo/client'
import { hasHydrated } from '@shared/hook'
import Eng from '@shared/lib/intl/en.json'
import { IntlProvider } from 'react-intl'
import { apolloClient } from '@shared/config'
import { Layout, Footer, Header } from '@component'
import useUserStore from '@feature/account/state/user.store'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const { settings } = useUserStore()
  const hasMounted = hasHydrated()

  return hasMounted ? (
    <IntlProvider
      locale={settings?.language as string}
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
  ) : null
}
