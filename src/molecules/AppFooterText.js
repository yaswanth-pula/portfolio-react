import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  footerText: {
    color: "#e5e5e5",
    fontSize: "1.1rem",
    fontWeight: "500",
    fontFamily: "inherit",
  },
});
const AppFooterText = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.footerText}>
      Made with ❤️ by Yaswanth Sai
    </Typography>
  );
};

export default AppFooterText;
