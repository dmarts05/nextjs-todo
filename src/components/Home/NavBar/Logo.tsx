import { Ubuntu } from 'next/font/google';
import Image from 'next/image';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['500'] });

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/nextdo-logo.png"
        alt="NextDo Logo"
        width="48"
        height="48"
        className="brightness-110"
      />
      <h2
        className={`${ubuntu.className} hidden text-xl font-semibold tracking-widest text-red-600 xs:block`}
      >
        NextDo
      </h2>
    </div>
  );
};

export default Logo;
