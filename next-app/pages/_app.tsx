import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { normalize, style } from 'styles/global'
import { PageWrapper } from 'context/pageContext'
import { UserWrapper } from 'context/userContext'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    getLayout(
      <>
        <Global styles={[normalize, style]} />
        <UserWrapper>
          <PageWrapper>
            <Component {...pageProps} />
          </PageWrapper>
        </UserWrapper>
      </>
    )
  )
}
