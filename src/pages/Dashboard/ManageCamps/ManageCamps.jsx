import { Button, Card, Typography } from "@material-tailwind/react";
import useCamp from "../../../hooks/useCamp";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { TbHttpDelete } from "react-icons/tb";
import { RxUpdate } from "react-icons/rx";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const ManageCamps = () => {
  const TABLE_HEAD = [
    "",
    "Name",
    "Healthcare Prof..",
    "Date & Time",
    "Location",
    "Update",
    "Delete",
  ];
  const [camp, refetch] = useCamp();
  const axiosSecure = useAxiosSecure();
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
        axiosSecure.delete(`/camps/${id}`).then((res) => {
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
  return (
    <>
      <SectionTitle
        heading="Manage Your Campaign"
        subHeading="campaign is essential for the society"
      ></SectionTitle>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full  table-auto text-left">
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
            {camp.map((data, index) => (
              <tr key={data._id} className="even:bg-blue-gray-50/50">
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
                    {data.CampName}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {data.HealthcareProfessional}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {data.DateTime}
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
                    {data.Location}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium flex "
                  >
                    <Link to={`/dashboard/updateData/${data._id}`}>
                      <Button variant="outlined">
                        <RxUpdate />
                      </Button>
                    </Link>
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium flex justify-center"
                  >
                    <button
                      className="text-red"
                      onClick={() => handleDelete(data._id)}
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
    </>
  );
};

export default ManageCamps;
