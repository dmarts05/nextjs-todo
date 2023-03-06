import Meta from '@/layouts/Meta';
import { AppConfig } from '@/utils/AppConfig';

const HomePage = () => {
  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />

      <p>Hello World</p>
    </>
  );
};

export default HomePage;
