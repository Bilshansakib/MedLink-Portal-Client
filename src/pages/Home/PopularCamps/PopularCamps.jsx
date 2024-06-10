import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularCard from "../../../components/Shared/CampCard/PopularCard";
import useCamp from "../../../hooks/useCamp";
import { Button } from "@material-tailwind/react";

const PopularCamps = () => {
  const [camp] = useCamp();
  console.log(camp);
  const popular = camp.filter((card) => card.ParticipantCount > 80);

  return (
    <section className="">
      <SectionTitle heading={"From our best camps"}></SectionTitle>
      {popular.length}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:justify-center">
        {popular.map((card) => (
          <PopularCard key={card.CampName} card={card}></PopularCard>
        ))}
      </div>
      <div className="flex text-center items-center justify-center mt-8">
        <Link to="availableCamps">
          <Button> see more</Button>
        </Link>
      </div>
    </section>
  );
};

export default PopularCamps;
