import { NextPage } from 'next'
import { AppProps } from 'next/app';
import { ReactElement } from 'react'
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page : ReactElement) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
  Component : NextPageWithLayout
}

function MyApp({ Component, pageProps } : AppPropsWithLayout) {

  //si existe el layout , si no solo regresa la pagina
  const getLayout = Component.getLayout || ((page) => page)

  //return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
