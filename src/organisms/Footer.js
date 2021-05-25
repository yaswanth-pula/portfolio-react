import { makeStyles } from "@material-ui/core/styles";
import { AppFooterText } from "../molecules/moleculesIndex";

const useStyles = makeStyles({
  footerContainer: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "#333",
    textAlign: "center",
    paddingTop: "0.8%",
    paddingBottom: "0.8%",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footerContainer}>
      <AppFooterText />
    </footer>
  );
};

export default Footer;
