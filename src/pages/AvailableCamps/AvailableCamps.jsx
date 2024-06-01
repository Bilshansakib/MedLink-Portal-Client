import { Helmet } from "react-helmet-async";
import CampsCover from "../../components/Shared/Cover/CampsCover";
import useCamp from "../../hooks/useCamp";

const AvailableCamps = () => {
  const [camp] = useCamp();
  return (
    <>
      <Helmet>
        <title>Medi+ | Available Camps</title>
      </Helmet>
      <CampsCover></CampsCover>
      <h2>{camp.length}</h2>
    </>
  );
};

export default AvailableCamps;
