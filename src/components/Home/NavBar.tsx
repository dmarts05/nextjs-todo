import Logo from './Logo';
import NavLinks from './NavLinks';

const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between border-b border-b-zinc-300 p-3 sm:px-[10vw]">
      <Logo />
      <NavLinks />
    </nav>
  );
};

export default NavBar;
