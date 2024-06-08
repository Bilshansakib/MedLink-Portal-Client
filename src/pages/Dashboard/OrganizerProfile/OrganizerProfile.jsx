import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import useParticipate from "../../../hooks/useParticipate";
import { Button, Image, Space } from "antd";
import { useEffect } from "react";
import useRole from "../../../hooks/useRole";
import { Helmet } from "react-helmet-async";
import cover from "../../../assets/home/01.jpg";
import useStats from "../../../hooks/useStats";

const OrganizerProfile = () => {
  const { user, logOut } = useAuth();
  const [role] = useRole();
  console.log(role);
  const [stats, refetch] = useStats();
  const { users, registered, revenue } = stats.data;

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
            // refetch();
            logOut();
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle
        heading={"Admin Profile"}
        subHeading={"Edit Your Profile"}
      ></SectionTitle>
      <div className="flex justify-center items-center">
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <div className="bg-white shadow-lg rounded-2xl w-4/5">
          <img
            alt="profile"
            src={cover}
            className="w-full mb-4 rounded-t-lg h-36"
          />
          <div className="flex flex-col items-center justify-center p-4 -mt-16">
            <a href="#" className="relative block">
              <Space size={12}>
                <Image
                  width={200}
                  src={user?.photoURL}
                  placeholder={
                    <Image preview={false} src={user?.photoURL} width={200} />
                  }
                />
              </Space>
            </a>

            <p className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full">
              {role && role.toUpperCase()}
            </p>
            <p className="mt-2 text-xl font-medium text-gray-800 ">
              User Id: {user.uid}
            </p>
            <div className="w-full p-2 mt-4 rounded-lg">
              <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
                <p className="flex flex-col">
                  Name
                  <span className="font-bold text-black ">
                    {user.displayName}
                  </span>
                </p>
                <p className="flex flex-col">
                  Email
                  <span className="font-bold text-black ">{user.email}</span>
                </p>

                <div>
                  <button className="bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1">
                    Update Profile
                  </button>
                  <button className="bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerProfile;
