import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useParticipate from "../../../hooks/useParticipate";
import useParticipator from "../../../hooks/useParticipator";

const YourCamps = () => {
  //   const [participator, refetch] = useParticipate();
  const [participator, refetch] = useParticipator();
  console.log(participator);
  return (
    <div>
      <SectionTitle
        heading={"Your Registered Camps "}
        subHeading={"Get All Your Registered Camps Here"}
      ></SectionTitle>

      {participator.length}
      <h1>{participator?.email}</h1>
    </div>
  );
};

export default YourCamps;
