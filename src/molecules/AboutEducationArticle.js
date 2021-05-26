import AppAboutArticle from "./AppAboutArticle";
import { MainHeader, TextTitle } from "../atoms/atomIndex";

const AboutEducationArticle = () => {
  const edTextContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit
    Accusantium nemo ab similique quibusdam dolorum, culpa 
    recusandae nulla natus impedit inventore quod maiores 
    totam accusamus! Quibusdam dolores reprehenderit pariatur 
    repudiandae ex.`;

  return (
    <AppAboutArticle
      children={
        <>
          <MainHeader text="Education 📚" classes="article-header" />
          <TextTitle text={edTextContent} classes="article-subtext" />
        </>
      }
    />
  );
};

export default AboutEducationArticle;
