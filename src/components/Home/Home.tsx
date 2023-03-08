import Image from 'next/image';

import Hero from './Hero';
import NavBar from './NavBar/NavBar';

const Home: React.FC = () => {
  return (
    <div className="flex h-screen-small flex-col">
      <NavBar />
      <Hero />
      <div className="relative h-[70vw] max-h-[450px]">
        <Image
          src="/images/hero-illustration.png"
          alt="Hero Illustration"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default Home;
