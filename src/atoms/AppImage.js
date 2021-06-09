const AppImage = (props) => {
  const { src, alt, classes } = props;
  return <img src={src} alt={alt} className={classes} />;
};

export default AppImage;
