import {
  Button,
  IconButton,
  Rating,
  Typography,
} from "@material-tailwind/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { GiHeartInside } from "react-icons/gi";
import { useLoaderData } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

const CampDetails = () => {
  const {
    CampName,
    Image,
    CampFees,
    DateTime,
    Location,
    HealthcareProfessional,
    ParticipantCount,
    Description,
    Ratings,
  } = useLoaderData();

  return (
    <>
      <SectionTitle
        heading={"What To Know More?"}
        subHeading={"Details here"}
      ></SectionTitle>
      <section className="">
        <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
          <img
            src="https://www.material-tailwind.com/image/product-4.png"
            alt="pink blazer"
            className="h-[36rem]"
          />
          <div>
            <Typography className="mb-4" variant="h3">
              {CampName}
            </Typography>
            <Typography variant="h5">${CampFees}</Typography>
            <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-500">
              {Description}
            </Typography>

            <div className="flex items-center justify-between">
              <Typography className="!mt-4 flex items-center gap-2 text-base font-normal leading-[27px] !text-gray-500">
                <FaUserDoctor size={24} /> {HealthcareProfessional}
              </Typography>
              <Typography className="!mt-4 flex items-center gap-2 text-base font-normal leading-[27px] !text-gray-500">
                <MdLocationPin size={24} /> {Location}
              </Typography>
            </div>

            <div className="my-8 flex items-center gap-2">
              <Rating value={4} className="text-amber-500" />
              <Typography className="!text-sm font-bold !text-gray-700">
                {Ratings}/5 (100 reviews)
              </Typography>
            </div>
            <Typography
              className="flex items-center gap-2"
              color="blue-gray"
              variant="h6"
            >
              <div className="h-5 w-5 rounded border border-gray-900 bg-blue-gray-600 "></div>
              Participant Count : {ParticipantCount}
            </Typography>
            <div className="my-8 mt-3 font-bold flex items-center gap-2">
              <div className="h-5 w-5  rounded border border-gray-900 bg-blue-gray-600 "></div>
              Date: {DateTime}
            </div>
            <div className="mb-4 flex w-full items-center gap-3 md:w-1/2 ">
              <Button color="gray" className="w-52">
                Join
              </Button>
              <IconButton color="gray" variant="text" className="shrink-0">
                <GiHeartInside className="h-6 w-6" />
              </IconButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CampDetails;
