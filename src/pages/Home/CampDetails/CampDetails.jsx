import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Input,
  Rating,
  Typography,
} from "@material-tailwind/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { GiHeartInside } from "react-icons/gi";
import { useLoaderData } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { useState } from "react";
import UserRegisterModal from "../../../components/Modal/UserRegisterModal";

const CampDetails = () => {
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);
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
              <Button onClick={handleOpen}>Join</Button>
              <IconButton color="gray" variant="text" className="shrink-0">
                <GiHeartInside className="h-6 w-6" />
              </IconButton>
            </div>

            {/* 
            <div
              data-dialog-backdrop="dialog-xl"
              data-dialog-backdrop-close="true"
              className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
            >
              <div
                data-dialog="dialog-xl"
                className="relative m-4 w-3/4 min-w-[75%] max-w-[75%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
              >
                <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
                  Its a simple dialog.
                </div>
                <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
                  The key to more success is to have a lot of pillows. Put it
                  this way, it took me twenty five years to get these plants,
                  twenty five years of blood sweat and tears, and I&apos;m never
                  giving up, I&apos;m just getting started. I&apos;m up to
                  something. Fan luv.
                </div>
                <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
                  <button
                    data-ripple-dark="true"
                    data-dialog-close="true"
                    className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Cancel
                  </button>
                  <button
                    data-ripple-light="true"
                    data-dialog-close="true"
                    className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="grid place-items-center container mx-auto">
        <Dialog className="p-4 m-8" size="xxl" open={open} handler={handleOpen}>
          {/* <DialogHeader className="justify-between">
            <img
              src="/image/exclamation.svg"
              alt="exclamation"
              className="w-10 h-10"
            />
            <IconButton
              color="gray"
              size="sm"
              variant="text"
              onClick={handleOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </DialogHeader> */}
          <DialogBody className="overflow-y-scroll">
            <UserRegisterModal></UserRegisterModal>
          </DialogBody>
        </Dialog>
      </section>
    </>
  );
};

export default CampDetails;
