import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/01.jpg";
import banner2 from "../../../assets/home/banner (2).jpg";
import Highlights from "../Highlightes/Highlights";
import Stories from "../Stories/Stories";
const Banner = () => {
  return (
    <Carousel>
      <div className="h-[600px]">
        <img src={banner2} />
      </div>
      <div className="h-[600px] ">
        <div className="">
          <Stories></Stories>
        </div>
      </div>
      <div className="h-[600px]">
        <Highlights></Highlights>
      </div>
    </Carousel>
  );
};

export default Banner;
