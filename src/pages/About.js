import aboutImage from "../assets/about.svg";
import { AppImage, TextTitle } from "../atoms/atomIndex";
import { AboutContent } from "../organisms/organismIndex";
const About = () => {
  return (
    <div>
      <AppImage source={aboutImage} alt="aboutPoster" classes="about-image" />
      <TextTitle classes="about-heading" text="About Me" />
      <AboutContent />
    </div>
  );
};

export default About;
