import AppAboutArticle from "./AppAboutArticle";
import { MainHeader, TextTitle } from "../atoms/atomIndex";

const AboutProjectsArticle = () => {
  const projectText1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Architecto vel distinctio, iusto facilis ad error quo unde cupiditate ea 
  perferendis laudantium sed optio esse quibusdam!`;

  const projectText2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Sequi soluta itaque eius omnis cum accusamus ut distinctio necessitatibus! 
  Sapiente eius magnam ipsa dignissimos vero maiores inventore deserunt 
  explicabo id odio?`;

  return (
    <AppAboutArticle
      children={
        <>
          <MainHeader text="Projects 🖥️" classes="article-header" />
          <h2>Lorem, ipsum dolor.</h2>
          <TextTitle text={projectText1} classes="article-subtext" />
          <h2>Lorem, ipsum.</h2>
          <TextTitle text={projectText2} classes="article-subtext" />
        </>
      }
    />
  );
};

export default AboutProjectsArticle;
