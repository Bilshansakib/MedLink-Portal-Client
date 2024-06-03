import { Skeleton } from "antd";
const Loader = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? "h-[250px]" : "h-[70vh]"}
        flex 
        flex-col 
        justify-center 
        items-center `}
    >
      <Skeleton active size={100} color="red" />
    </div>
  );
};

export default Loader;
