const AppImage = (props) => {
  const { source, alt, classes } = props;
  return <img src={source} alt={alt} className={classes} />;
};

export default AppImage;
