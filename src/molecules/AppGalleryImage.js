import { makeStyles } from "@material-ui/core";
import { AppImage } from "../atoms/atomIndex";
const useStyles = makeStyles({
  galleryImage: {
    width: "25vw",
    height: "25em",
    objectFit: "cover",
    borderRadius: "0.75em",
  },
});
const AppGalleryImage = (props) => {
  const { src } = props;
  const styles = useStyles();

  return <AppImage src={src} alt="gallery" classes={styles.galleryImage} />;
};

export default AppGalleryImage;
