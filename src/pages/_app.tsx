import React from 'react'
import { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { useStore } from '../store'

import GlobalStyle from '../styles/global'

import Layout from '../layout'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </Provider>
  )
}

export default MyApp
