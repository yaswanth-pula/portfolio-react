import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  brandName: {
    fontSize: "2rem",
    fontWeight: 600,
    color: "#333",
    flex: 2,
    fontFamily: "inherit",
  },
});
const AppNavHeader = () => {
  const classes = useStyles();
  return (
    <Typography component="span" className={classes.brandName}>
      Yaswanth Sai
    </Typography>
  );
};

export default AppNavHeader;
