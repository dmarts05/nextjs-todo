import Link from 'next/link';

const NavLinks = () => {
  return (
    <ul className="flex gap-6">
      <li>
        <Link href="/login">Log in</Link>
      </li>
      <li>
        <Link
          href="/signup"
          className="rounded-md bg-red-700 py-1 px-3 font-medium text-white"
        >
          Sign up
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
