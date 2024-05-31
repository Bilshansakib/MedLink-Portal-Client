const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-3/12 my-8">
      <p className=" text-amber-600 ">---| {subHeading} |---</p>
      <h3 className="uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
