import { makeStyles } from "@material-ui/core";
import AppGalleryImage from "../molecules/AppGalleryImage";
import { deleteItemFromStore } from "../store/localStore";
import AppLinkButton from "../molecules/AppLinkButton";

const useStyles = makeStyles({
  pictureContainer: {
    position: "relative",
    "&:hover &.overlay": {
      display: "block",
      background: "rgba(0, 0, 0, 0.3)",
    },
    "&:hover $overlay": {
      display: "block",
      background: "rgba(0, 0, 0, 0.3)",
    },
    "&:hover $viewButton": {
      opacity: 1,
    },
    "&:hover $optionButton": {
      opacity: 1,
    },
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    color: "#000",
    transition: "color 0.5s ease",
    borderRadius: "8px",
  },
  optionButton: {
    position: "absolute",
    width: "25vw",
    left: "0",
    textAlign: "center",
    opacity: "0",
    transition: "opacity 0.35s ease",
  },
  viewPosition: {
    top: "25%",
  },
  deletePosition: {
    top: "50%",
  },
});

const GalleryImageItem = (props) => {
  const { image, informParent, isAdmin } = props;
  const styles = useStyles();
  const handleDeleteClick = () => {
    let decison = window.confirm("Are You Sure to Delete Image ?");
    if (decison) {
      deleteItemFromStore(image.id);
      informParent();
    }
  };

  return (
    <div className={styles.pictureContainer}>
      <AppGalleryImage src={image.url} />
      {isAdmin && (
        <>
          <div className={styles.overlay}></div>
          <div className={`${styles.optionButton} ${styles.viewPosition}`}>
            <AppLinkButton text="view" href={image.url} target="_blank" />
          </div>
          <div className={`${styles.optionButton} ${styles.deletePosition}`}>
            <AppLinkButton handler={handleDeleteClick} text="Delete" />
          </div>
        </>
      )}
    </div>
  );
};

export default GalleryImageItem;
