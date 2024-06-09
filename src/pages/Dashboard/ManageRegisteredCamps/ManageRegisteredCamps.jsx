import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import {
  Card,
  Typography,
  Button,
  CardBody,
  Chip,
  Avatar,
} from "@material-tailwind/react";
import usePaymentStatus from "../../../hooks/usePaymentStatus";
import Swal from "sweetalert2";
import { axiosSecure } from "../../../hooks/useAxiosSecure";

const TABLE_HEAD = [
  "Image",
  "Participator Name",
  "Camp Name",
  "Camp Fees",

  "Payment Status",
  "Confirmation Status",
  "Cancel",
];

const ManageRegisteredCamps = () => {
  // const { user } = useAuth;
  // const [participator] = useParticipator();

  // const participateName = participator.map((item) => item.Participator?.name);
  // const paymentStatus = participator.map((item) => item.Participator?.status);
  // console.log(participator);
  const [paidUser, refetch] = usePaymentStatus();
  console.log("get data", paidUser.email);

  const handleConfirmation = (id) => {
    axiosSecure.patch(`/paidUser/status/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Great, You Have Confirmed The Participator's Payment`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleCancelUser = (id) => {
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
        axiosSecure.delete(`/paidUser/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `Successfully Cancel...`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        subHeading={"Manage Registered Camps"}
        heading={"Manage Your Registered Camps"}
      ></SectionTitle>
      <div>
        <Card className="h-screen overflow-scroll">
          <CardBody>
            <table className=" table-auto text-start">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y w-full text-2xl  border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold text-lg leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="w-full border-2">
                {paidUser.map(
                  (
                    {
                      _id,
                      Image,
                      CampName,

                      CampFees,
                      status,
                      email,
                      DateTime,
                      Location,
                      HealthcareProfessional,
                      ParticipantCount,
                      Description,
                    },
                    index
                  ) => {
                    const isLast = index === paidUser.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={_id}>
                        <td className={classes}>
                          <div className="flex items-center  gap-3">
                            <Avatar
                              src={Image}
                              alt={index}
                              size="md"
                              className="border  border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal text-center"
                          >
                            {email}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal text-center"
                          >
                            {CampName}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal text-center"
                          >
                            {CampFees}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <div className="w-max text-center">
                            <Chip
                              size="sm"
                              variant="ghost"
                              value={status}
                              color={
                                status === "paid"
                                  ? "green"
                                  : status === "pending"
                                  ? "amber"
                                  : "red"
                              }
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <button onClick={() => handleConfirmation(_id)}>
                            {status}
                          </button>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal text-center"
                          >
                            <button onClick={() => handleCancelUser(_id)}>
                              Cancel
                            </button>
                          </Typography>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ManageRegisteredCamps;
