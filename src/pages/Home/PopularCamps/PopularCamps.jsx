import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

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
    </section>
  );
};

export default PopularCamps;
