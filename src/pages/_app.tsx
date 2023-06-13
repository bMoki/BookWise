/* eslint-disable camelcase */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito_Sans } from 'next/font/google'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunitoSans',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nunitoSans.variable}>
      <Component {...pageProps} />
    </main>
  )
}
