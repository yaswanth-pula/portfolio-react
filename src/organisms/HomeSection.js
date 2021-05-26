import Grid from "@material-ui/core/Grid";
import {
  AppHomeDevImage,
  AppHomeResumeButton,
  AppHomeSubTitleText,
  AppHomeTitleText,
} from "../molecules/moleculesIndex";

const HomeSection = () => {
  return (
    <Grid container direction="row" justify="space-around" alignItems="center">
      <div>
        <AppHomeTitleText />
        <AppHomeSubTitleText />
        <AppHomeResumeButton />
      </div>
      <div>
        <AppHomeDevImage />
      </div>
    </Grid>
  );
};

export default HomeSection;
