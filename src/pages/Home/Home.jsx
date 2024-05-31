import Banner from "./Banner/Banner";
import Featured from "./Features/Featured";
import PopularCamps from "./PopularCamps/PopularCamps";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularCamps></PopularCamps>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
