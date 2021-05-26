import { AppNavHeader } from "../molecules/moleculesIndex";
import NavList from "./NavList";

const NavBar = () => {
  return (
    <nav className="navbar">
      <AppNavHeader />
      <NavList />
    </nav>
  );
};

export default NavBar;
