import TextField from "@material-ui/core/TextField";

const InputTextField = (props) => {
  const { label, placeholder, isTextArea, rows } = props;
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      placeholder={placeholder}
      fullWidth
      multiline={isTextArea}
      rows={rows}
    />
  );
};

export default InputTextField;
