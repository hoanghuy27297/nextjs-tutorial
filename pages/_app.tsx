import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Layout } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {}, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
