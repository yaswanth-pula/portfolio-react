import { Container } from "@material-ui/core";
import { TextTitle, InputTextField } from "../atoms/atomIndex";
import { AppLinkButton } from "../molecules/moleculesIndex";
const ContactForm = () => {
  return (
    <Container maxWidth="sm">
      <div className="contact-form">
        <TextTitle text="Contact Me" classes="contact-form-header" />
        <div className="input-field">
          <InputTextField label="Full Name" placeholder="Enter Your Name" />
        </div>
        <div className="input-field">
          <InputTextField label="Email" placeholder="Enter your Email" />
        </div>
        <div className="input-field">
          <InputTextField
            label="Message"
            placeholder="Drop Your Message Here..."
            isTextArea={true}
            rows={4}
          />
        </div>
        <div className="input-field">
          <AppLinkButton text="Send Message" />
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
