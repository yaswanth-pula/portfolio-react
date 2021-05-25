import { AppNavLink } from "../molecules/moleculesIndex";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navlist: {
    listStyle: "none",
    display: "flex",
    flexWrap: "nowrap",
    textAlign: "right",
    flex: 1,
  },
});

const NavList = () => {
  const classes = useStyles();
  return (
    <ul className={classes.navlist}>
      <AppNavLink text="Home" path="/home" />
      <AppNavLink text="About" path="/about" />
      <AppNavLink text="Contact" path="/contact" />
      <AppNavLink text="Gallery" path="/gallery" />
    </ul>
  );
};

export default NavList;
