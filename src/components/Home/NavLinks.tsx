import NavLink from './NavLink';

const links: {
  href: string;
  text: string;
  type?: string;
}[] = [
  { href: '/login', text: 'Log in' },
  { href: '/signup', text: 'Sign up', type: 'cta' },
];

const NavLinks: React.FC = () => {
  return (
    <ul className="hidden gap-3 xs:flex">
      {links.map((link) => {
        return (
          <li key={link.href}>
            <NavLink href={link.href} type={link.type}>
              {link.text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
