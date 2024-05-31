import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularCard from "../../../components/Shared/CampCard/PopularCard";

const PopularCamps = () => {
  const [camp, setCamp] = useState([]);
  useEffect(() => {
    fetch("campsData.json")
      .then((res) => res.json())
      .then((data) => {
        const PopularCamp = data.filter((camp) => camp.ParticipantCount > 80);
        setCamp(PopularCamp);
      });
  }, []);
  return (
    <section>
      <SectionTitle heading={"From our best camps"}></SectionTitle>
      {camp.length}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {camp.map((card) => (
          <PopularCard key={card.CampName} card={card}></PopularCard>
        ))}
      </div>
    </section>
  );
};

export default PopularCamps;
