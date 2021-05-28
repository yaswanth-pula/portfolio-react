import { makeStyles } from "@material-ui/core";
import aboutImage from "../assets/about.svg";
import { AppImage, TextTitle } from "../atoms/atomIndex";
import { AboutContent } from "../organisms/organismIndex";
const useStyles = makeStyles({
  aboutImage: {
    width: "100%",
    height: "40vh",
    objectFit: "contain",
  },
  aboutHeading: {
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: "700",
    textDecoration: "underline",
  },
});

const About = () => {
  const styles = useStyles();
  return (
    <div>
      <AppImage
        src={aboutImage}
        alt="aboutPoster"
        classes={styles.aboutImage}
      />
      <TextTitle classes={styles.aboutHeading} text="About Me" />
      <AboutContent />
    </div>
  );
};

export default About;
