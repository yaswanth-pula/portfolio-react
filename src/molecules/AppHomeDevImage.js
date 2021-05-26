import devImage from "../assets/dev.svg";
import { AppImage } from "../atoms/atomIndex";

const AppHomeDevImage = () => {
  return <AppImage source={devImage} alt="dev" classes="dev-image" />;
};

export default AppHomeDevImage;
