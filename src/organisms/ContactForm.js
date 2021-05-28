import { Container, makeStyles } from "@material-ui/core";
import { TextTitle, InputTextField } from "../atoms/atomIndex";
import { AppLinkButton } from "../molecules/moleculesIndex";

const useStyles = makeStyles({
  contactForm: {
    padding: "1em",
    borderRadius: "0.5em",
    border: "0.25em solid #333",
  },
  contactFormTitle: {
    textAlign: "center",
    fontSize: "1.5rem",
    textDecoration: "underline",
    fontWeight: "600",
    color: "#333",
  },
  inputFieldMargin: {
    marginTop: "1em",
    marginBottom: "1em",
  },
  submitButton: {
    margin: "1em",
    textAlign: "center",
  },
});

const ContactForm = () => {
  const styles = useStyles();
  return (
    <Container maxWidth="sm">
      <div className={styles.contactForm}>
        <TextTitle text="Contact Me" classes={styles.contactFormTitle} />
        <InputTextField
          label="Full Name"
          placeholder="Enter Your Name"
          classes={styles.inputFieldMargin}
        />
        <InputTextField
          label="Email"
          placeholder="Enter your Email"
          classes={styles.inputFieldMargin}
        />
        <InputTextField
          label="Message"
          placeholder="Drop Your Message Here..."
          isTextArea={true}
          rows={4}
          classes={styles.inputFieldMargin}
        />
        <div className={styles.submitButton}>
          <AppLinkButton text="Send Message" />
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
