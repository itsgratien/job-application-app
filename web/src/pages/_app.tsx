import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/redux/index';
import { Message } from '@/components/Shared/Message';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Message />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
