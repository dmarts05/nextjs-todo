import Head from 'next/head';

import { AppConfig } from '@/utils/AppConfig';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>{AppConfig.title}</title>
        <meta name="description" content={AppConfig.description} />
      </Head>
      <p>Hello World</p>
    </>
  );
};

export default HomePage;
