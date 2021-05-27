import { TextTitle } from "../atoms/atomIndex";
const AppAboutArticle = (props) => {
  const { children } = props;
  return (
    <>
      <article>{children}</article>
      <span className="topic-seprator">
        <TextTitle classes="topic-seprator-text" text="....." />
      </span>
    </>
  );
};

export default AppAboutArticle;
