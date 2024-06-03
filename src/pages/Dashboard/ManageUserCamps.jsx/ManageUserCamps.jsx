import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Button, Card, Typography } from "@material-tailwind/react";
import { AiTwotoneDelete } from "react-icons/ai";
import { TbHttpDelete } from "react-icons/tb";
import Swal from "sweetalert2";
import useUsers from "../../../hooks/useUsers";
import { FaUser } from "react-icons/fa6";

const ManageUserCamps = () => {
  const axiosSecure = useAxiosSecure();
  const [users, refetch] = useUsers();

  //   const { data: users = [], refetch } = useQuery({
  //     queryKey: ["users"],
  //     queryFn: async () => {
  //       const res = await axiosSecure.get(`/users`);
  //       return res.data;
  //     },
  //   });
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Great, ${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  console.log(users);
  const handleDeleteUser = (user) => {
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
        console.log(user._id);
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const TABLE_HEAD = [
    "",
    "Name",
    "Healthcare Prof..",
    "Date & Time",
    "Location",
    "Action",
    "",
  ];
  return (
    <div>
      <div>
        <h2>Manage Registered Camps of (User ({users.length}))</h2>
      </div>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {index + 1}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.email}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.DateTime}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {user.role}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {user.role === "admin" ? (
                      "admin"
                    ) : (
                      <Button
                        onClick={() => handleMakeAdmin(user)}
                        variant="text"
                      >
                        <FaUser></FaUser>
                      </Button>
                    )}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    <button
                      className="text-red"
                      onClick={() => handleDeleteUser(user)}
                      color="red"
                    >
                      <AiTwotoneDelete className="text-red-600"></AiTwotoneDelete>
                      <TbHttpDelete className="text-red-600" />
                    </button>
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default ManageUserCamps;
