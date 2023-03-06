import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/nextdo-logo.png"
        alt="NextDo Logo"
        width="48"
        height="48"
      />
      <h2 className="hidden text-xl font-semibold tracking-widest text-red-700 xs:block">
        NextDo
      </h2>
    </div>
  );
};

export default Logo;
