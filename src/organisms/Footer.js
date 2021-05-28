import { makeStyles } from "@material-ui/core";
import { TextTitle } from "../atoms/atomIndex";

const useStyles = makeStyles({
  footerContainer: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "#333",
    textAlign: "center",
    paddingTop: "0.2%",
    paddingBottom: "0.2%",
  },
  footerText: {
    color: "#e5e5e5",
    fontSize: "1.1rem",
    fontWeight: "500",
    fontFamily: "inherit",
  },
});

const Footer = () => {
  const styles = useStyles();

  return (
    <footer className={styles.footerContainer}>
      <TextTitle
        classes={styles.footerText}
        text="Made with ❤️ by Yaswanth Sai"
      />
    </footer>
  );
};

export default Footer;
