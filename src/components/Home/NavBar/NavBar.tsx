import Logo from './Logo';
import NavLinks from './NavLinks';

const NavBar: React.FC = () => {
  return (
    <nav className=" flex h-[10vh] min-h-[5rem] items-center justify-between border-b border-b-zinc-300 px-6 sm:px-[10vw]">
      <Logo />
      <NavLinks />
    </nav>
  );
};

export default NavBar;
