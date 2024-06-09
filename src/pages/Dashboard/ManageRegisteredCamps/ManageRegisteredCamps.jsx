import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useParticipator from "../../../hooks/useParticipator";
import {
  Card,
  Typography,
  Button,
  CardBody,
  Chip,
  Avatar,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import usePaymentStatus from "../../../hooks/usePaymentStatus";

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
  const [paidUser] = usePaymentStatus();
  console.log("get data", paidUser);
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
                          <Button variant="text">{status}</Button>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal text-center"
                          >
                            <button
                            // onClick={() => handleDelete(_id)}
                            >
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
