import Grid from "@material-ui/core/Grid";
import devImage from "../assets/dev.svg";
import { AppImage, MainHeader, TextTitle } from "../atoms/atomIndex";
import AppLinkButton from "../molecules/AppLinkButton";
import resume from "../assets/resume.txt";

const HomeSection = () => {
  const subTitleText =
    "On a mission to become a better engineer in the industry.";
  return (
    <Grid container direction="row" justify="space-around" alignItems="center">
      <div>
        <MainHeader classes="main-title" text="I'm Yaswanth Sai" />
        <TextTitle classes="main-subtitle" text={subTitleText} />
        <AppLinkButton href={resume} text="See My Resume" download={true} />
      </div>
      <div>
        <AppImage source={devImage} alt="dev" classes="dev-image" />
      </div>
    </Grid>
  );
};

export default HomeSection;
