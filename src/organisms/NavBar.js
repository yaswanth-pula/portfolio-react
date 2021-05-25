import { makeStyles } from "@material-ui/core";
import { AppNavHeader } from "../molecules/moleculesIndex";
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
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <nav className={classes.navbar}>
      <AppNavHeader />
      <NavList />
    </nav>
  );
};

export default NavBar;
