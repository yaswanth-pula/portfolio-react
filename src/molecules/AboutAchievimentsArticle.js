import AppAboutArticle from "./AppAboutArticle";
import { MainHeader, TextTitle } from "../atoms/atomIndex";

const AboutAchievimentsArticle = () => {
  const achieviment1 = ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
  molestiae, dolore totam temporibus nihil numquam.`;

  const achieviment2 = `Architecto voluptatum aut non perferendis adipisci! Atque
  exercitationem perferendis corrupti!`;

  const achieviment3 = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
  molestiae, dolore totam temporibus nihil numquam.`;

  return (
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
  );
};

export default AboutAchievimentsArticle;
