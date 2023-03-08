import type { NextPage } from 'next';

import Home from '@/components/Home/Home';
import Meta from '@/layouts/Meta';
import { AppConfig } from '@/utils/AppConfig';

const HomePage: NextPage = () => {
  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Home />
    </>
  );
};

export default HomePage;
