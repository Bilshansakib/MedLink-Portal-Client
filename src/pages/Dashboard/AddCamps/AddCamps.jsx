import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { Button, Input } from "@material-tailwind/react";
import { FaUserDoctor } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddCamps = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res);
    if (res.data.success) {
      const campData = {
        CampName: data.CampName,
        Image: res.data.data.display_url,
        CampFees: parseFloat(data.CampFees),
        DateTime: data.DateTime,

        HealthcareProfessional: data.HealthcareProfessional,
        ParticipantCount: data.ParticipantCount,
        Description: data.Description,
        Location: data.Location,
      };
      console.table(campData);
      const campsResponse = await axiosSecure.post("/camps", campData);
      console.log(campsResponse.data.insertedId);
      if (campsResponse.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.CampName} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
  };
  return (
    <div>
      <SectionTitle
        heading="add a campaign"
        subHeading="campaign is essential for the society"
      ></SectionTitle>
      <div className="bg-gray-100 p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-start gap-4 mb-4">
            <div className="space-y-4 w-full">
              <Input
                {...register("CampName", { required: true })}
                variant="outlined"
                label="Camp Name"
                placeholder="camp name"
              />
              <Input
                {...register("HealthcareProfessional", { required: true })}
                variant="outlined"
                label="Healthcare Professional"
                placeholder="Healthcare Professional"
              />
              <Input
                {...register("image", { required: true })}
                type="file"
              ></Input>
            </div>
            <div className="space-y-2 w-full">
              <Input
                {...register("CampFees", { required: true })}
                variant="standard"
                label="Camp Fees"
                placeholder="Camp Fees"
              />
              <Input
                {...register("Location", { required: true })}
                variant="standard"
                label="Location"
                placeholder="Location"
              />

              <Input
                {...register("DateTime", { required: true })}
                variant="standard"
                label="Date & Time"
                placeholder="Date & Time"
              />
            </div>
          </div>
          <Input
            {...register("Description")}
            variant="outlined"
            label="Description"
            placeholder="Description"
          />

          <Button type="submit" className="flex  gap-2 mt-4">
            <FaUserDoctor />
            add camp
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddCamps;
