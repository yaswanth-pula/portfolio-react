import Container from "@material-ui/core/Container";
import { AppAboutArticle } from "../molecules/moleculesIndex";
import { MainHeader, TextTitle } from "../atoms/atomIndex";

const AboutContent = () => {
  const edTextContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit
  Accusantium nemo ab similique quibusdam dolorum, culpa 
  recusandae nulla natus impedit inventore quod maiores 
  totam accusamus! Quibusdam dolores reprehenderit pariatur 
  repudiandae ex.`;

  const projectText1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Architecto vel distinctio, iusto facilis ad error quo unde cupiditate ea 
  perferendis laudantium sed optio esse quibusdam!`;

  const projectText2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Sequi soluta itaque eius omnis cum accusamus ut distinctio necessitatibus! 
  Sapiente eius magnam ipsa dignissimos vero maiores inventore deserunt 
  explicabo id odio?`;

  const achieviment1 = ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
  molestiae, dolore totam temporibus nihil numquam.`;

  const achieviment2 = `Architecto voluptatum aut non perferendis adipisci! Atque
  exercitationem perferendis corrupti!`;

  const achieviment3 = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
  molestiae, dolore totam temporibus nihil numquam.`;

  return (
    <Container>
      <AppAboutArticle
        children={
          <>
            <MainHeader text="Education 📚" classes="article-header" />
            <TextTitle text={edTextContent} classes="article-subtext" />
          </>
        }
      />
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
      <AppAboutArticle
        children={
          <>
            <MainHeader text="Achieviments 🥇" classes="article-header" />
            <TextTitle text={achieviment1} classes="article-subtext" />
            <TextTitle text={achieviment2} classes="article-subtext" />
            <TextTitle text={achieviment3} classes="article-subtext" />
          </>
        }
      />
      <AppAboutArticle
        children={
          <>
            <MainHeader text="Pass Time ⌛" classes="article-header" />
            <TextTitle
              text="Hangout with Friends 🧑‍🤝‍🧑"
              classes="article-subtext"
            />
            <TextTitle text="Watching Movies 📺" classes="article-subtext" />
            <TextTitle text="Cooking 🍳" classes="article-subtext" />
          </>
        }
      />
    </Container>
  );
};

export default AboutContent;
