import { AppGalleryImage, AppLinkButton } from "../molecules/moleculesIndex";
import { useEffect, useState } from "react";
import { getAllImagesFromStore } from "../store/localStore";

const GalleryContent = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    setImageList(getAllImagesFromStore());
  }, []);

  return (
    <>
      <div className="admin-btn-container">
        <AppLinkButton href="/admin" text="Gallery Admin" />
      </div>
      <div className="gallery-container">
        <div className="gallery-image-container">
          {imageList.map((img) => {
            return <AppGalleryImage source={img.url} key={img.id} />;
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
