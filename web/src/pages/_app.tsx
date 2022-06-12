import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/redux/index';
import { Message } from '@/components/Shared/Message';
import { useRouter } from 'next/router';
import Loader from 'react-spinners/FadeLoader';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();

  React.useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setLoading(true);
    });

    router.events.on('routeChangeComplete', () => {
      setLoading(false);
    });

    router.events.on('routeChangeError', () => {
      setLoading(false);
    });
  }, [router]);
  return (
    <Provider store={store}>
      {loading && (
        <div className="loadingScreen absolute inset=0  w-full h-full flex items-center justify-center">
          <div>
            <Loader color='white' />
          </div>
        </div>
      )}
      <Message />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
