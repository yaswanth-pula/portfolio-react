import aboutImage from "../assets/about.svg";
import { AppImage } from "../atoms/atomIndex";
const AppAboutHeaderImage = () => {
  return (
    <AppImage source={aboutImage} alt="aboutPoster" classes="about-image" />
  );
};

export default AppAboutHeaderImage;
