import NavLink from './NavLink';

const NavLinks = () => {
  return (
    <ul className="flex gap-6">
      <li>
        <NavLink link="/login">Log in</NavLink>
      </li>
      <li>
        <NavLink link="/signup" type="cta">
          Sign up
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
