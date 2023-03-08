import Home from '@/components/Home/Home';
import Meta from '@/layouts/Meta';
import { AppConfig } from '@/utils/AppConfig';

const HomePage: React.FC = () => {
  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Home />
    </>
  );
};

export default HomePage;
