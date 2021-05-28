import { GalleryAdminImage } from "../molecules/moleculesIndex";
import { useEffect, useState } from "react";
import { getAllImagesFromStore } from "../store/localStore";
import AdminAddImage from "./AdminAddImage";

const GalleryAdminContent = () => {
  const [imageList, setImageList] = useState([]);
  const [childUpdate, setChildUpdate] = useState("");

  useEffect(() => {
    setImageList(getAllImagesFromStore());
  }, [childUpdate]);

  const handleChildUpdate = () => {
    setChildUpdate(Date.now());
  };

  return (
    <>
      <AdminAddImage informParent={handleChildUpdate} />
      <div className="gallery-container">
        <div className="gallery-image-container">
          {imageList.map((img) => {
            return (
              <GalleryAdminImage
                image={img}
                key={img.id}
                informParent={handleChildUpdate}
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
