const MainHeader = (props) => {
  const { classes, text } = props;
  return <h1 className={classes}>{text}</h1>;
};

export default MainHeader;
