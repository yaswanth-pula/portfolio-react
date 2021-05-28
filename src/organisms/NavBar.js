import { makeStyles } from "@material-ui/core";
import { TextTitle } from "../atoms/atomIndex";
import NavList from "./NavList";

const useStyles = makeStyles({
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: "2em",
    paddingRight: "2em",
    overflow: "hidden",
  },
  brandName: {
    fontSize: "2rem",
    fontWeight: "600",
    flex: "2",
  },
});
const NavBar = () => {
  const styles = useStyles();
  return (
    <nav className={styles.navbar}>
      <TextTitle classes={styles.brandName} text="Yaswanth Sai" />
      <NavList />
    </nav>
  );
};

export default NavBar;
