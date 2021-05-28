import { AppImage } from "../atoms/atomIndex";
import AppLinkButton from "./AppLinkButton";
import { deleteItemFromStore } from "../store/localStore";

const GalleryAdminImage = (props) => {
  // const classes = useStyles();
  const { image, informParent } = props;

  function handleDeleteClick() {
    let decison = window.confirm("Are You Sure to Delete Image ?");
    if (decison) {
      deleteItemFromStore(image.id);
      informParent();
    }
  }

  return (
    <div className="pic-container">
      <AppImage source={image.url} classes="gallery-image" />
      <div className="overlay"></div>
      <div className="view-btn">
        <AppLinkButton text="view" href={image.url} target="_blank" />
      </div>
      <div className="delete-btn-container">
        <AppLinkButton handler={handleDeleteClick} text="Delete" />
      </div>
    </div>
  );
};

export default GalleryAdminImage;
