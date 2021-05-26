import AppAboutArticle from "./AppAboutArticle";
import { MainHeader, TextTitle } from "../atoms/atomIndex";

const AboutPassTimeArticle = () => {
  return (
    <AppAboutArticle
      children={
        <>
          <MainHeader text="Pass Time ⌛" classes="article-header" />
          <TextTitle text="Hangout with Friends 🧑‍🤝‍🧑" classes="article-subtext" />
          <TextTitle text="Watching Movies 📺" classes="article-subtext" />
          <TextTitle text="Cooking 🍳" classes="article-subtext" />
        </>
      }
    />
  );
};

export default AboutPassTimeArticle;
