import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper/modules";
import story1 from "../../../assets/stories/story1.jpg";
const Stories = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={story1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={story1} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Stories;
