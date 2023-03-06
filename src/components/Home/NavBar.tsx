import Logo from './Logo';
import NavLinks from './NavLinks';

const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-[#fbfbfb] p-3">
      <Logo />
      <NavLinks />
    </nav>
  );
};

export default NavBar;
