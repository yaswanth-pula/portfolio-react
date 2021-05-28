import { makeStyles } from "@material-ui/core";
import { TextTitle } from "../atoms/atomIndex";

const useStyles = makeStyles({
  topicSeprator: {
    textAlign: "center",
  },
  topicSepratorText: {
    fontSize: "2.25rem",
    fontWeight: "800",
  },
});

const AppAboutArticle = (props) => {
  const { children } = props;
  const styles = useStyles();
  return (
    <>
      <article>{children}</article>
      <span className={styles.topicSeprator}>
        <TextTitle classes={styles.topicSepratorText} text="....." />
      </span>
    </>
  );
};

export default AppAboutArticle;
