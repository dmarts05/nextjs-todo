import { useState } from 'react';

import Logo from './Logo';
import MenuLinks from './MenuLinks';
import NavLinks from './NavLinks';

const NavBar: React.FC = () => {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuShown((prev) => !prev);
  };

  return (
    <>
      <nav className="flex items-center justify-between border-b border-b-zinc-300 p-3 sm:px-[10vw]">
        <Logo />
        <NavLinks toggleMenu={toggleMenu} />
      </nav>
      {isMenuShown && <MenuLinks />}
    </>
  );
};

export default NavBar;
