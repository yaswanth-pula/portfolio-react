import { useState } from "react";
import { AppLinkButton } from "../molecules/moleculesIndex";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputTextField from "../atoms/InputTextField";
import { addNewImageToStore } from "../store/localStore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  adminButtonContainer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "1em",
  },
});

const AdminAddImage = (props) => {
  const [imageUrl, setImageUrl] = useState("");
  const [toggleDialog, setToggleDialog] = useState(false);
  const { informParent } = props;
  const styles = useStyles();

  const handleDialogOpen = () => {
    setToggleDialog(true);
  };

  const handleDialogClose = () => {
    setImageUrl("");
    setToggleDialog(false);
  };

  const handleUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleAddNewImage = () => {
    addNewImageToStore(imageUrl);
    setImageUrl("");
    informParent();
    setToggleDialog(false);
  };

  return (
    <>
      <div className={styles.adminButtonContainer}>
        <AppLinkButton handler={handleDialogOpen} text="Add New Image" />
      </div>
      <Dialog
        open={toggleDialog}
        onClose={handleDialogClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Image</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter New Image Url to Add it to Gallery.
          </DialogContentText>
          <InputTextField
            label="Image Url"
            placeholder="Enter Image Url.."
            value={imageUrl}
            changeHandler={handleUrlChange}
          />
        </DialogContent>
        <DialogActions>
          <AppLinkButton handler={handleDialogClose} text="Cancel" />
          <AppLinkButton handler={handleAddNewImage} text="Add Image" />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AdminAddImage;
