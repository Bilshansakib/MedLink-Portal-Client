import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useParticipate from "../../../hooks/useParticipate";
import React, { useState } from "react";
import { Button, Image, Space } from "antd";
import { axiosSecure } from "./../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const YourProfile = () => {
  const { logOut } = useAuth();
  const [participator, refetch] = useParticipate();

  const participate = participator[0]?.Participator;
  console.log(participator[0]?._id);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/participator/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `Your Profile data has been deleted.`,
              icon: "success",
            });
            refetch();
            logOut();
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle
        heading={"Your Profile"}
        subHeading={"Edit Your Profile"}
      ></SectionTitle>
      <div className="w-full bg-blue-gray-50 p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
        <div className=" flex justify-between gap-4 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <div className="">
            <Space size={12}>
              <Image
                width={200}
                src={participate?.photo}
                placeholder={
                  <Image preview={false} src={participate?.photo} width={200} />
                }
              />
            </Space>
          </div>
          <div className=" space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">{participate?.name}</h2>
              <span className="text-sm dark:text-gray-600">
                {participator[0]?.Occupation}
              </span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Email address"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-600">{participate?.email}</span>
              </span>
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Phonenumber"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-600">
                  +{participator[0]?.ContactNumber}
                </span>
              </span>
            </div>
          </div>
          <div className=" flex text-center gap-2 justify-center items-center flex-col">
            {/* todo: edit */}
            <Button size="sm">Edit</Button>
            <Button
              onClick={() => handleDelete(participator[0]?._id)}
              size="sm"
            >
              Delete Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourProfile;
