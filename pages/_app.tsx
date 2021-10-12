import GlobalStyles from '@styles/GlobalStyles';
import { AppProps } from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';

import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
