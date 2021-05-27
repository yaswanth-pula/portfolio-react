import { AppGalleryImage, AppLinkButton } from "../molecules/moleculesIndex";
import foodimg1 from "../assets/food_img1.jpg";
import foodimg2 from "../assets/food_img2.jpg";
import foodimg3 from "../assets/food_img3.jpg";

const GalleryContent = () => {
  return (
    <>
      <div className="admin-btn-container">
        <AppLinkButton href="/admin" text="Gallery Admin" />
      </div>
      <div className="gallery-container">
        <div className="gallery-image-container">
          <AppGalleryImage source={foodimg1} />
          <AppGalleryImage source={foodimg2} />
          <AppGalleryImage source={foodimg3} />
        </div>
      </div>
    </>
  );
};

export default GalleryContent;
