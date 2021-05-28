import { makeStyles } from "@material-ui/core";
import { AppNavLink } from "../molecules/moleculesIndex";
const useStyles = makeStyles({
  navList: {
    listStyle: "none",
    display: "flex",
    flexWrap: "nowrap",
    textAlign: "right",
    flex: "1",
  },
});

const NavList = () => {
  const styles = useStyles();
  return (
    <ul className={styles.navList}>
      <AppNavLink text="Home" path="/home" />
      <AppNavLink text="About" path="/about" />
      <AppNavLink text="Contact" path="/contact" />
      <AppNavLink text="Gallery" path="/gallery" />
    </ul>
  );
};

export default NavList;
