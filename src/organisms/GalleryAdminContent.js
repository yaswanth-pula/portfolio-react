import { GalleryAdminImage } from "../molecules/moleculesIndex";
import foodimg1 from "../assets/food_img1.jpg";
import foodimg2 from "../assets/food_img2.jpg";
import foodimg3 from "../assets/food_img3.jpg";

const GalleryAdminContent = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-image-container">
        <GalleryAdminImage source={foodimg1} />
        <GalleryAdminImage source={foodimg2} />
        <GalleryAdminImage source={foodimg3} />
      </div>
    </div>
  );
};

export default GalleryAdminContent;
