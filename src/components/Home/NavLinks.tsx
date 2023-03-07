import { Bars3Icon } from '@heroicons/react/24/outline';

import NavLink from './NavLink';

interface INavLinksProps {
  toggleMenu: React.MouseEventHandler;
}

const NavLinks: React.FC<INavLinksProps> = ({ toggleMenu }) => {
  return (
    <>
      <Bars3Icon
        className="h-auto w-8 cursor-pointer text-zinc-700 xs:hidden"
        onClick={toggleMenu}
      />
      <ul className="hidden gap-3 xs:flex">
        <li>
          <NavLink link="/login">Log in</NavLink>
        </li>
        <li>
          <NavLink link="/signup" type="cta">
            Sign up
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
