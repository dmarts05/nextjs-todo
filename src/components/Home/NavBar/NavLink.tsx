import Link from 'next/link';

interface INavLinkProps {
  href: string;
  children: string;
  type?: string;
}

const NavLink: React.FC<INavLinkProps> = ({ href, children, type }) => {
  let linkStyle = 'rounded-lg py-1.5 px-4 duration-200';

  switch (type) {
    case 'cta':
      linkStyle += ' bg-red-700 font-medium text-white hover:bg-red-800';
      break;

    default:
      linkStyle += ' text-zinc-700 hover:bg-zinc-200';
      break;
  }

  return (
    <Link className={linkStyle} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
