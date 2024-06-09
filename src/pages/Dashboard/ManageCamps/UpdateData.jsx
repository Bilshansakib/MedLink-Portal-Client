import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUserDoctor } from "react-icons/fa6";
import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateData = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const {
    _id,
    CampName,
    Image,
    CampFees,
    DateTime,
    Location,
    HealthcareProfessional,
    ParticipantCount,
    Description,
  } = useLoaderData();

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
        Image: res.data?.data?.display_url,
        CampFees: parseFloat(data.CampFees),
        DateTime: data.DateTime,

        HealthcareProfessional: data.HealthcareProfessional,
        ParticipantCount: parseFloat(data.ParticipantCount),
        Description: data.Description,
        Location: data.Location,
        Participant_Count: 0,
      };
      //   update
      const campsResponse = await axiosSecure.put(`/camps/${_id}`, campData);
      console.log(campsResponse.data);
      if (campsResponse.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.CampName} is updated to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
        // reset();
      }
    }
  };

  return (
    <>
      <div>
        <SectionTitle subHeading={`Update Your Data Here`}></SectionTitle>
      </div>
      <div className="bg-gray-100 p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-start gap-4 mb-4">
            <div className="space-y-4 w-full">
              <Input
                defaultValue={CampName}
                {...register("CampName")}
                variant="outlined"
                label="Camp Name"
                placeholder="camp name"
              />
              <Input
                defaultValue={HealthcareProfessional}
                {...register("HealthcareProfessional")}
                variant="outlined"
                label="Healthcare Professional"
                placeholder="Healthcare Professional"
              />
              {/* <Input {...register("image")} type="file"></Input> */}
            </div>
            <div className="space-y-2 w-full">
              <Input
                defaultValue={CampFees}
                {...register("CampFees")}
                variant="standard"
                label="Camp Fees"
                placeholder="Camp Fees"
              />
              <Input
                defaultValue={Location}
                {...register("Location")}
                variant="standard"
                label="Location"
                placeholder="Location"
              />

              <Input
                defaultValue={DateTime}
                {...register("DateTime")}
                variant="standard"
                label="Date & Time"
                placeholder="Date & Time"
              />
              <Input Value={Image} {...register("image")} type="file"></Input>
            </div>
          </div>
          <Input
            defaultValue={Description}
            {...register("Description")}
            variant="outlined"
            label="Description"
            placeholder="Description"
          />

          <Button type="submit" className="flex  gap-2 mt-4">
            <FaUserDoctor />
            Update Camp
          </Button>
        </form>
      </div>
    </>
  );
};

export default UpdateData;
