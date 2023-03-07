import NavLink from './NavLink';

const links: {
  href: string;
  text: string;
  type?: string;
}[] = [
  { href: '/auth/login', text: 'Log in' },
  { href: '/auth/signup', text: 'Sign up', type: 'cta' },
];

const NavLinks: React.FC = () => {
  return (
    <ul className="flex gap-3">
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
