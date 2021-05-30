import { Container, makeStyles } from "@material-ui/core";
import { useState } from "react";
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
  const [fieldValues, setFieldValues] = useState({
    name_field: "",
    email_field: "",
    message_field: "",
  });
  const [fieldError, setFieldError] = useState({
    nameError: false,
    emailError: false,
    messageError: false,
  });

  const inputChangeHandler = (event) => {
    const inputId = event.target.id;
    const inputValue = event.target.value;
    setFieldValues((prev) => {
      return { ...prev, [inputId]: inputValue };
    });
  };

  const validateNameField = () => {
    let validateResult = fieldValues.name_field === "";
    setFieldError((prev) => {
      return { ...prev, nameError: validateResult };
    });
    return validateResult;
  };
  const validateEmailField = () => {
    let validateResult = fieldValues.email_field === "";
    setFieldError((prev) => {
      return { ...prev, emailError: validateResult };
    });
    return validateResult;
  };

  const validateMessageField = () => {
    let validateResult = fieldValues.message_field === "";
    setFieldError((prev) => {
      return { ...prev, messageError: validateResult };
    });
    return validateResult;
  };

  const validateFields = () => {
    validateNameField();
    validateEmailField();
    validateMessageField();
    let res =
      !validateNameField() && !validateEmailField() && !validateMessageField();
    if (res) {
      setFieldValues({ name_field: "", email_field: "", message_field: "" });
      setFieldError({
        nameError: false,
        emailError: false,
        messageError: false,
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <div className={styles.contactForm}>
        <TextTitle text="Contact Me" classes={styles.contactFormTitle} />
        <InputTextField
          id="name_field"
          label="Full Name"
          placeholder="Enter Your Name"
          classes={styles.inputFieldMargin}
          value={fieldValues.name_field}
          isError={fieldError.nameError}
          errorText="Name Cannot be Empty"
          changeHandler={inputChangeHandler}
        />
        <InputTextField
          id="email_field"
          label="Email"
          placeholder="Enter your Email"
          classes={styles.inputFieldMargin}
          isError={fieldError.emailError}
          errorText="Email ID"
          value={fieldValues.email_field}
          changeHandler={inputChangeHandler}
        />
        <InputTextField
          label="Message"
          id="message_field"
          placeholder="Drop Your Message Here..."
          isTextArea={true}
          value={fieldValues.message_field}
          isError={fieldError.messageError}
          rows={4}
          classes={styles.inputFieldMargin}
          errorText="Message cannot be Empty"
          changeHandler={inputChangeHandler}
        />
        <div className={styles.submitButton}>
          <AppLinkButton text="Send Message" handler={validateFields} />
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
