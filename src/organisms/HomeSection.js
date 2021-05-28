import Grid from "@material-ui/core/Grid";
import devImage from "../assets/dev.svg";
import { AppImage, MainHeader, TextTitle } from "../atoms/atomIndex";
import AppLinkButton from "../molecules/AppLinkButton";
import resume from "../assets/resume.txt";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  mainTitle: {
    fontSize: "4.3rem",
  },
  mainSubtitle: {
    marginTop: "1em",
    fontSize: "1.75rem",
  },
  devImage: {
    width: "40vw",
    height: "50vh",
  },
});

const HomeSection = () => {
  const styles = useStyles();
  const subTitleText =
    "On a mission to become a better engineer in the industry.";
  return (
    <Grid container direction="row" justify="space-around" alignItems="center">
      <div>
        <MainHeader classes={styles.mainTitle} text="I'm Yaswanth Sai" />
        <TextTitle classes={styles.mainSubtitle} text={subTitleText} />
        <AppLinkButton href={resume} text="See My Resume" download={true} />
      </div>
      <div>
        <AppImage src={devImage} alt="dev" classes={styles.devImage} />
      </div>
    </Grid>
  );
};

export default HomeSection;
