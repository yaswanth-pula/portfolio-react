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
  } = props;
  return (
    <TextField
      className={classes}
      id="outlined-basic"
      label={label}
      variant="outlined"
      placeholder={placeholder}
      fullWidth
      autoComplete="off"
      multiline={isTextArea}
      rows={rows}
      onChange={changeHandler ? (event) => changeHandler(event) : null}
      value={value}
    />
  );
};

export default InputTextField;
