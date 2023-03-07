import Link from 'next/link';

interface INavLinkProps {
  link: string;
  children: string;
  type?: string;
  extraClasses?: string;
}

const NavLink: React.FC<INavLinkProps> = ({
  link,
  children,
  type,
  extraClasses,
}) => {
  let linkStyle = 'rounded-md py-1.5 px-4 duration-200';

  switch (type) {
    case 'cta':
      linkStyle += ' bg-red-700 font-medium text-white hover:bg-red-800';
      break;

    default:
      linkStyle += ' text-zinc-700 hover:bg-zinc-200';
      break;
  }

  linkStyle += ` ${extraClasses}`;

  return (
    <Link className={linkStyle} href={link}>
      {children}
    </Link>
  );
};

export default NavLink;
