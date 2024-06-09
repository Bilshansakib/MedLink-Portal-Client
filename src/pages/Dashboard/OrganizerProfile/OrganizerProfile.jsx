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
import { Cell, Legend, Pie, PieChart } from "recharts";

const OrganizerProfile = () => {
  const { user } = useAuth();
  const [role] = useRole();
  const [stats, refetch] = useStats();
  console.log(stats?.data?.users);
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
            // logOut();
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
      <div className="container mx-auto grid justify-center grid-cols-2 text-center  lg:grid-cols-3">
        <div className="flex flex-col justify-start m-2 lg:m-6 text-[#9899fc]">
          <p className="text-4xl font-bold leading-none lg:text-6xl text-[#4052ee]">
            {stats?.data?.users}
          </p>
          <p className="text-sm sm:text-base">Website Users</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6 text-[#9899fc]">
          <p className="text-4xl font-bold leading-none lg:text-6xl text-[#4052ee]">
            {stats?.data?.revenue}
          </p>
          <p className="text-sm sm:text-base">Total Revenue</p>
        </div>
        <div className="flex flex-col justify-start m-2 lg:m-6 text-[#9899fc]">
          <p className="text-4xl font-bold leading-none lg:text-6xl text-[#4052ee]">
            {stats?.data?.registered}
          </p>
          <p className="text-sm sm:text-base">Total Participating Camp</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Helmet>
          <title>Profile</title>
        </Helmet>

        <div className="bg-white shadow-lg rounded-2xl w-4/5 ">
          <img
            alt="profile"
            src={cover}
            className="w-full mb-4 rounded-t-lg h-36"
          />
          <div className="flex flex-col items-center justify-center p-4 -mt-16 ">
            <a href="#" className="relative block avatar online">
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

            <p className="p-2 mt-2 px-4 animate-pulse text-xs text-white bg-blue-500 rounded-full">
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
                  <button className="bg-[#9899fc] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#4052ee] block mb-1">
                    Update Profile
                  </button>
                  <button className="bg-[#4052ee] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#4052ee]">
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
