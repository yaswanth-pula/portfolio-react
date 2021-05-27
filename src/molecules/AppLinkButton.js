import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: "#333",
    fontFamily: "inherit",
    fontWeight: 600,
    backgroundColor: "#86f0b9",
    "&:hover": {
      backgroundColor: "#e5e5e5",
    },
  },
});
const AppLinkButton = (props) => {
  const classes = useStyles();
  const { href, text, download } = props;
  return (
    <Button
      variant="contained"
      href={href}
      className={classes.root}
      download={download}
    >
      {text}
    </Button>
  );
};

export default AppLinkButton;
