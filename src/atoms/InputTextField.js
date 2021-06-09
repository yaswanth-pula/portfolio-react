import TextField from "@material-ui/core/TextField";
const InputTextField = (props) => {
  const {
    label,
    placeholder,
    isTextArea,
    rows,
    changeHandler,
    value,
    classes,
    isError,
    errorText,
    id,
  } = props;
  return (
    <TextField
      className={classes}
      id={id}
      label={label}
      variant="outlined"
      placeholder={placeholder}
      fullWidth
      autoComplete="off"
      multiline={isTextArea}
      rows={rows}
      onChange={changeHandler ? (event) => changeHandler(event) : null}
      value={value}
      error={isError}
      helperText={isError ? errorText : ""}
    />
  );
};

export default InputTextField;
