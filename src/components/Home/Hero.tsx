import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <>
      <header className="relative flex h-full flex-col items-center justify-center gap-6 overflow-hidden pt-6 sm:px-[10vw]">
        <h1 className="text-center text-4xl font-semibold xs:text-5xl sm:text-6xl">
          Organize your
          <br />
          work and life, finally.
        </h1>
        <h2 className="max-w-[45ch] text-center text-lg text-zinc-700 xs:text-xl sm:text-2xl">
          Become focused, organized, and calm with NextDo. The world&apos;s #1
          task manager and to-do list app.
        </h2>
        <Link
          href="/auth/signup"
          className="rounded-lg bg-red-600 py-2 px-6 text-xl font-medium text-white duration-200 hover:bg-red-700 sm:text-2xl"
        >
          Sign up
        </Link>
      </header>
    </>
  );
};

export default Hero;
