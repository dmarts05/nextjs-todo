import Link from 'next/link';

const MenuLinks: React.FC = () => {
  return (
    <ul className="flex items-center justify-evenly gap-3 p-3 xs:hidden sm:px-[10vw]">
      <li className="flex grow">
        <Link
          href="/login"
          className="grow rounded-md bg-zinc-200 py-1.5 text-center font-medium text-zinc-700 duration-200 hover:bg-zinc-300"
        >
          Log in
        </Link>
      </li>
      <li className="flex grow">
        <Link
          href="/signup"
          className="grow rounded-md bg-red-700 py-1.5 text-center font-medium text-white duration-200 hover:bg-red-800"
        >
          Sign up
        </Link>
      </li>
    </ul>
  );
};

export default MenuLinks;
