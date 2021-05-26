import {
  AppAboutHeaderImage,
  AppAboutHeaderText,
} from "../molecules/moleculesIndex";
import { AboutContent } from "../organisms/organismIndex";
const About = () => {
  return (
    <div>
      <AppAboutHeaderImage />
      <AppAboutHeaderText />
      <AboutContent />
    </div>
  );
};

export default About;
