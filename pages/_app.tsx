import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import Layout from '@/pages/components/layaout/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}
