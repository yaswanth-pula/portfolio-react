import { AppImage } from "../atoms/atomIndex";

const AppGalleryImage = (props) => {
  const { source } = props;

  return <AppImage source={source} alt="gallery" classes="gallery-image" />;
};

export default AppGalleryImage;
