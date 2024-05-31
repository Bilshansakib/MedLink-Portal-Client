import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import Flicking from "@egjs/react-flicking";
import FrameGrid from "@egjs/react-flicking";
const Banner = () => {
  return (
    <Carousel>
      <div className="h-[600px]">
        <img src={img1} />
      </div>
      <div className="h-[600px]">
        <img src={img2} />
      </div>
      {/* flicking */}
      <div className="max-h-screen">
        <Flicking moveType="freeScroll" bound={true}>
          <span className="button mr-2 is-white">🍎 Apple</span>
          <span className="button mr-2 is-white">🍉 Watermelon</span>
          <span className="button mr-2 is-white">🥝 Kiwi</span>
          <span className="button mr-2 is-white">...</span>
        </Flicking>
      </div>
    </Carousel>
  );
};

export default Banner;
