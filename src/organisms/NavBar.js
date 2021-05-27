import { TextTitle } from "../atoms/atomIndex";
import NavList from "./NavList";

const NavBar = () => {
  return (
    <nav className="navbar">
      <TextTitle classes="brand-name" text="Yaswanth Sai" />
      <NavList />
    </nav>
  );
};

export default NavBar;
