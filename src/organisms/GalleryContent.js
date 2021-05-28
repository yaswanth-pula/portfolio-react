import { AppLinkButton } from "../molecules/moleculesIndex";
import { useEffect, useState } from "react";
import { getAllImagesFromStore } from "../store/localStore";
import { makeStyles } from "@material-ui/core/styles";
import GalleryImageItem from "./GalleryImageItem";

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
  adminButton: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "1em",
  },
});

const GalleryContent = () => {
  const [imageList, setImageList] = useState([]);
  const styles = useStyles();
  useEffect(() => {
    setImageList(getAllImagesFromStore());
  }, []);

  return (
    <>
      <div className={styles.adminButton}>
        <AppLinkButton href="/admin" text="Gallery Admin" />
      </div>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryImageContainer}>
          {imageList.map((img) => {
            return (
              <GalleryImageItem image={img} key={img.id} isAdmin={false} />
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

export default GalleryContent;
