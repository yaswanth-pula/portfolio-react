import { makeStyles } from "@material-ui/core";
import AppButton from "../atoms/AppButton";

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
  const { href, text, download, target, handler } = props;
  return (
    <AppButton
      text={text}
      href={href}
      classes={classes.root}
      download={download}
      target={target}
      handler={handler}
    />
  );
};

export default AppLinkButton;
