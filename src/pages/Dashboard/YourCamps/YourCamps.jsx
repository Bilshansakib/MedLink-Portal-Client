import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useParticipate from "../../../hooks/useParticipate";
import useParticipator from "../../../hooks/useParticipator";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const TABLE_HEAD = [
  "Image",
  "Camp Name",
  "Camp Fees",
  "Participator Name",
  "Payment Status",
  "Confirmation Status",
  "Cancel",
  "FeedBack",
];
const YourCamps = () => {
  //   const [participator, refetch] = useParticipate();
  const [participator, refetch] = useParticipator();

  const participatorName = participator[0]?.Participator?.name;

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
  } = participator;
  console.log(_id);
  const totalPrice = participator.reduce(
    (total, item) => total + item.CampFees,
    0
  );
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
        axiosSecure.delete(`/registered/${id}`).then((res) => {
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
    <div>
      <SectionTitle
        heading={"Your Registered Camps "}
        subHeading={"Get All Your Registered Camps Here"}
      ></SectionTitle>
      <div className="flex justify-evenly mb-8">
        <h2 className="text-4xl">Items: {participator.length}</h2>
        <h2 className="text-4xl">Total Price: {totalPrice}</h2>
        {participator.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-primary">Pay</button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary">
            Pay
          </button>
        )}
      </div>
      <Card className="h-full w-full overflow-scroll-x">
        <CardBody>
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-lg leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {participator.map(
                (
                  {
                    _id,
                    Image,
                    CampName,

                    CampFees,
                    DateTime,
                    Location,
                    HealthcareProfessional,
                    ParticipantCount,
                    Description,
                  },
                  index
                ) => {
                  const isLast = index === participator.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={_id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={Image}
                            alt={index}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {CampName}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {CampFees}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {participatorName}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
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
                        <Button variant="text">Paid</Button>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          <button onClick={() => handleDelete(_id)}>
                            Cancel
                          </button>
                        </Typography>
                      </td>
                      {/* <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                            <Avatar
                              src={
                                CampFees === "visa"
                                  ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                  : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                              }
                              size="sm"
                              alt={CampFees}
                              variant="square"
                              className="h-full w-full object-contain p-1"
                            />
                          </div>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal capitalize"
                            >
                              {CampFees.split("-").join(" ")}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {expiry}
                            </Typography>
                          </div>
                        </div>
                      </td> */}
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text">Feedback</IconButton>
                        </Tooltip>
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
  );
};

export default YourCamps;
