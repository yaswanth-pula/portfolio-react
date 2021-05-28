import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles({
  margin: {
    marginBottom: "1em",
  },
});
const InputTextField = (props) => {
  const classes = useStyles();
  const {
    label,
    placeholder,
    isTextArea,
    rows,
    changeHandler,
    value,
    // classes,
  } = props;
  return (
    <TextField
      className={classes.margin}
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
