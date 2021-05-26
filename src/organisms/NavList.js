import { AppNavLink } from "../molecules/moleculesIndex";
const NavList = () => {
  return (
    <ul className="nav-list">
      <AppNavLink text="Home" path="/home" />
      <AppNavLink text="About" path="/about" />
      <AppNavLink text="Contact" path="/contact" />
      <AppNavLink text="Gallery" path="/gallery" />
    </ul>
  );
};

export default NavList;
