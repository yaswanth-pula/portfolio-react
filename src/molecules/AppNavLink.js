import { makeStyles } from "@material-ui/core";
import { NavLink } from "../atoms/atomIndex";

const useStyles = makeStyles({
  textStyle: {},
  link: {
    textDecoration: "none",
    color: "#333",
    padding: "0.75em",
    fontSize: "2rem",
    fontWeight: "400",

    "&:hover": {
      textDecoration: "none",
      background: "#e5e5e5",
      borderRadius: "0.25em",
    },
  },
});
const AppNavLink = (props) => {
  const classes = useStyles();
  const { text, path } = props;
  return <NavLink text={text} path={path} classes={classes.link} />;
};

export default AppNavLink;
