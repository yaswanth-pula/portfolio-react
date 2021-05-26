import Container from "@material-ui/core/Container";
import {
  AboutEducationArticle,
  AppAboutTopicSeprator,
  AboutProjectsArticle,
  AboutAchievimentsArticle,
  AboutPassTimeArticle,
} from "../molecules/moleculesIndex";

const AboutContent = () => {
  return (
    <Container>
      <AboutEducationArticle />
      <AppAboutTopicSeprator />
      <AboutProjectsArticle />
      <AppAboutTopicSeprator />
      <AboutAchievimentsArticle />
      <AppAboutTopicSeprator />
      <AboutPassTimeArticle />
      <AppAboutTopicSeprator />
    </Container>
  );
};

export default AboutContent;
