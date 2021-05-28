import GalleryImageItem from "./GalleryImageItem";
import { useEffect, useState } from "react";
import { getAllImagesFromStore } from "../store/localStore";
import AdminAddImage from "./AdminAddImage";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  galleryContainer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  galleryImageContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, auto)",
    columnGap: "1em",
    rowGap: "2em",
  },
});

const GalleryAdminContent = () => {
  const [imageList, setImageList] = useState([]);
  const [childUpdate, setChildUpdate] = useState("");
  const styles = useStyles();

  useEffect(() => {
    setImageList(getAllImagesFromStore());
  }, [childUpdate]);

  const handleChildUpdate = () => {
    setChildUpdate(Date.now());
  };

  return (
    <>
      <AdminAddImage informParent={handleChildUpdate} />
      <div className={styles.galleryContainer}>
        <div className={styles.galleryImageContainer}>
          {imageList.map((img) => {
            return (
              <GalleryImageItem
                image={img}
                key={img.id}
                informParent={handleChildUpdate}
                isAdmin={true}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h1>.</h1>
      </div>
    </>
  );
};

export default GalleryAdminContent;
