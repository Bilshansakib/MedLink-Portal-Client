import { Button, Input } from "@material-tailwind/react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Modal } from "antd";

const Reviews = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const reviewsInfo = {
      CampName: data.CampName,
      Rating: parseFloat(data.Rating),
      Feedback: data.Feedback,
    };
    console.log(reviewsInfo);
    axiosPublic.post("/reviews", reviewsInfo).then((res) => {
      if (res.data.insertedId) {
        console.log("review dhukse vhitore");
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Review, Posted`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  let minValue = 0;
  let maxValue = 5;

  return (
    <div>
      <SectionTitle
        subHeading={"Review Center"}
        heading={"Give Us Your Valuable Feedback Here"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="h-screen bg-white p-8 rounded-xl">
          <div className="flex gap-2">
            <Input
              {...register("CampName", { required: true })}
              color="teal"
              label="Camp Name"
            />
            <Input
              {...register(
                "Rating",
                { pattern: /\d+/ },
                { required: true, max: { maxValue }, min: { minValue } }
              )}
              color="teal"
              type="number"
              min={0}
              max={5}
              label="Rating"
            />
            {errors.Rating?.type < "min" && (
              <span className="label-text-alt text-red-600 font-bold">
                Rating Starts with 1 ,Ends with 5
              </span>
            )}
            {errors.Rating?.type > "max" && (
              <span className="label-text-alt text-red-600 font-bold">
                Rating Starts with 1 ,Ends with 5
              </span>
            )}
          </div>
          <div>
            <input
              {...register("Feedback", { required: true })}
              placeholder="Feedback..."
              className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-teal-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            ></input>

            <p className="mt-3 font-bold text-xs text-gray-400 dark:text-gray-600">
              Give us how you feel about us!
            </p>
          </div>
          <div className="flex mt-4 w-full">
            <Button type="submit" color="blue" variant="gradient">
              {" "}
              Save FeedBack
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reviews;
