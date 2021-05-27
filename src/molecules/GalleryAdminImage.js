import { AppImage } from "../atoms/atomIndex";
const GalleryAdminImage = (props) => {
  const { source } = props;
  return <AppImage source={source} alt="gallery" classes="gallery-image" />;
};

export default GalleryAdminImage;
