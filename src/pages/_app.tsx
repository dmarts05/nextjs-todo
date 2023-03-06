import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className={poppins.className}>
    <Component {...pageProps} />
  </div>
);

export default MyApp;
