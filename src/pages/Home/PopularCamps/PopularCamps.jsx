import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularCard from "../../../components/Shared/CampCard/PopularCard";
import useCamp from "../../../hooks/useCamp";

const PopularCamps = () => {
  const [camp] = useCamp();
  const popular = camp.filter((camp) => camp.ParticipantCount > 80);

  return (
    <section className="">
      <SectionTitle heading={"From our best camps"}></SectionTitle>
      {popular.length}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:justify-center">
        {popular.map((card) => (
          <PopularCard key={card.CampName} card={card}></PopularCard>
        ))}
      </div>
      <button>see all camp</button>
    </section>
  );
};

export default PopularCamps;
