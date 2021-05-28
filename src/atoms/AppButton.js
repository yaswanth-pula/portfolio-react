import Button from "@material-ui/core/Button";
const AppButton = (props) => {
  const { href, text, download, classes, handler, target } = props;
  return (
    <Button
      variant="contained"
      href={href}
      color="primary"
      className={classes}
      download={download}
      onClick={handler ? () => handler() : null}
      target={target}
    >
      {text}
    </Button>
  );
};

export default AppButton;
