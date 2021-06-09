const TextTitle = (props) => {
  const { classes, text } = props;
  return <p className={classes}>{text}</p>;
};

export default TextTitle;
