import { Typography } from "@material-tailwind/react";

const SectionTitle = ({ heading, subHeading, description }) => {
  return (
    // <div className="mx-auto text-center md:w-3/12 my-8">
    //   <p className=" text-amber-600 ">---| {subHeading} |---</p>
    //   <h3 className="uppercase">{heading}</h3>
    // </div>
    <div className="container mx-auto mb-10 text-center lg:mb-20">
      <Typography color="blue-gray" className="mb-2 font-bold uppercase">
        {heading}
      </Typography>
      <Typography
        color="blue-gray"
        className="mb-4 !text-2xl font-bold lg:!text-4xl"
      >
        {subHeading}
      </Typography>
      <Typography variant="lead" className="mx-auto max-w-lg !text-gray-500">
        {description}
      </Typography>
    </div>
  );
};

export default SectionTitle;
