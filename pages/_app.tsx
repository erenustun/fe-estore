import '@/public/styles/globals.css'
import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'
import { Header } from '@components/Header'
import StyledComponentsRegistry from '@/src/lib/registry'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@src/config/apollo-client.config'
import { Layout } from '@components/Layout/Layout'
import { hasHydrated } from '@util/has-hydrated.hook'
import { CookiesProvider } from 'react-cookie'
import { Footer } from '@components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const hasMounted = hasHydrated()

  return hasMounted ? (
    <CookiesProvider>
      <StyledComponentsRegistry>
        <ApolloProvider client={apolloClient}>
          <Layout className={inter.className}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Layout>
        </ApolloProvider>
      </StyledComponentsRegistry>
    </CookiesProvider>
  ) : null
}
