import Image from 'next/image';

import Hero from './Hero';
import NavBar from './NavBar/NavBar';

const Home: React.FC = () => {
  return (
    <div className="flex h-screen-small flex-col">
      <NavBar />
      <Hero />
      <div className="relative mx-auto max-h-[50vh] overflow-hidden">
        <Image
          src="/images/hero-illustration.png"
          alt="Hero Illustration"
          itemType="intrinsic"
          width="1120"
          height="610"
          priority
        />
      </div>
    </div>
  );
};

export default Home;
