// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import doc1 from "../../../assets/highlights/doc1.jpg";
import doc2 from "../../../assets/highlights/doc2.jpg";
const Highlights = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img src={doc1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={doc2} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Highlights;
