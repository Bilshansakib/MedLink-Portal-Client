import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/bundle";
import { Navigation, Keyboard } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://project-finale-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  //   ------------rating
  const CUSTOM_GROUP_LABEL_ID = "group_label";

  const CUSTOM_ITEM_LABELS_IDS = [
    "label_1",
    "label_2",
    "label_3",
    "label_4",
    "label_5",
  ];
  const CUSTOM_ITEM_LABELS = [
    "Bad",
    "Poor",
    "Average",
    "Very Good",
    "Excellent",
  ];

  const StarDrawing = (
    <path
      d="M398.799,141.794c-43.394-3.977-86.776-6.52-130.158-8.418C258.835,99.302,242.633-4.751,193.173,0.169
        c-39.659,3.944-61.012,90.515-73.08,130.306c-32.333,0.283-64.692,1.062-97.09,2.416c-14.735,0.615-27.908,17.9-18.207,31.732
        c19.157,27.316,44.198,49.389,70.487,70.103c-11.83,38.196-21.665,77.499-29.759,116.53c-3.504,16.91-5.31,32.212,3.881,44.82
        c2.411,9.987,12.018,18.494,22.429,18.029c51.805-2.313,93.872-44.738,133.991-77.119c33.156,26.317,66.309,52.64,99.475,78.951
        c12.835,10.183,37.057,5.178,35.798-14.828c-3.039-48.158-15.477-96.473-30.599-144.041c32.951-25.229,65.899-50.459,99.11-75.353
        C426.818,168.817,420.858,143.814,398.799,141.794z"
    />
  );
  const customStyles = {
    itemShapes: StarDrawing,
    activeFillColor: "#22C55E",
    inactiveFillColor: "#BBF7D0",
  };
  return (
    <section className="">
      <SectionTitle
        subHeading={"What Clients Saying"}
        heading={"Testimonials"}
        description={"descriptions of testimonials"}
      ></SectionTitle>
      <Swiper
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Navigation, Keyboard]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 my-8 space-y-8 flex flex-col items-center">
              <div role="group" style={{ maxWidth: 450, width: "100%" }}>
                <Rating
                  value={review.Ratings}
                  itemStyles={customStyles}
                  onChange={review.Ratings}
                  readOnly
                  visibleLabelId={CUSTOM_GROUP_LABEL_ID}
                  visibleItemLabelIds={CUSTOM_ITEM_LABELS_IDS}
                  spaceBetween="medium"
                  spaceInside="medium"
                  transition="colors"
                />

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    justifyItems: "center",
                  }}
                >
                  {CUSTOM_ITEM_LABELS.map((label, index) => (
                    <span
                      key={label}
                      id={CUSTOM_ITEM_LABELS_IDS[index]}
                      style={{
                        opacity: index + 1 === review.Rating ? 1 : 0.35,
                        textDecoration:
                          index + 1 === review.Rating ? "underline" : "inherit",
                        padding: "0 5%",
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
              <p>{review.Feedback}</p>
              <h3 className="text-2xl text-red-200 underline">
                {review.CampName}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
