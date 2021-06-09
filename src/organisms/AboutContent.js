import Container from "@material-ui/core/Container";
import { AppAboutArticle } from "../molecules/moleculesIndex";
import { MainHeader, TextTitle } from "../atoms/atomIndex";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  articleHeader: {
    fontSize: "2.25rem",
    fontWeight: "600",
  },
  articleSubtext: {
    fontSize: "1.5rem",
    fontWeight: "400",
  },
});

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

  const styles = useStyles();

  return (
    <Container>
      <AppAboutArticle
        children={
          <>
            <MainHeader text="Education 📚" classes={styles.articleHeader} />
            <TextTitle text={edTextContent} classes={styles.articleSubtext} />
          </>
        }
      />
      <AppAboutArticle
        children={
          <>
            <MainHeader text="Projects 🖥️" classes={styles.articleHeader} />
            <h2>Lorem, ipsum dolor.</h2>
            <TextTitle text={projectText1} classes={styles.articleSubtext} />
            <h2>Lorem, ipsum.</h2>
            <TextTitle text={projectText2} classes={styles.articleSubtext} />
          </>
        }
      />
      <AppAboutArticle
        children={
          <>
            <MainHeader text="Achieviments 🥇" classes={styles.articleHeader} />
            <TextTitle text={achieviment1} classes={styles.articleSubtext} />
            <TextTitle text={achieviment2} classes={styles.articleSubtext} />
            <TextTitle text={achieviment3} classes={styles.articleSubtext} />
          </>
        }
      />
      <AppAboutArticle
        children={
          <>
            <MainHeader text="Pass Time ⌛" classes={styles.articleHeader} />
            <TextTitle
              text="Hangout with Friends 🧑‍🤝‍🧑"
              classes={styles.articleSubtext}
            />
            <TextTitle
              text="Watching Movies 📺"
              classes={styles.articleSubtext}
            />
            <TextTitle text="Cooking 🍳" classes={styles.articleSubtext} />
          </>
        }
      />
    </Container>
  );
};

export default AboutContent;
