import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { MdOutlineRateReview } from "react-icons/md";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  console.log(payments);
  const CampName = payments[0]?.CampName[0];
  const TABLE_HEAD = [
    "No.",
    "Camp Name",
    "Fees",

    "Confirmation Status",

    "Payment Status",
    "Transaction ID",
    "FeedBack",
  ];

  return (
    <div>
      <SectionTitle
        subHeading={"Payment History"}
        heading={"Check Your Past And Current Transactions"}
      ></SectionTitle>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b text-center border-blue-gray-100 bg-blue-gray-50 p-4"
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
            {payments.map(({ CampFees, transactionId, status }, index) => {
              const isLast = index === payments.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name} className="text-center">
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue"
                      className="font-normal"
                    >
                      {CampName}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue"
                      className="font-normal"
                    >
                      {CampFees}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue"
                      className="font-normal"
                    >
                      {status}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue"
                      className="font-bold"
                    >
                      {" "}
                      {status}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue"
                      className="font-normal"
                    >
                      {transactionId}
                    </Typography>
                  </td>
                  {status ? (
                    <>
                      {" "}
                      <Link to="/dashboard/reviews">
                        <td className={`${classes} `}>
                          <Typography
                            variant="small"
                            color="blue"
                            className="underline flex gap-2 items-center font-bold"
                          >
                            <MdOutlineRateReview /> Reviews
                          </Typography>
                        </td>
                      </Link>
                    </>
                  ) : (
                    <>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          N/A
                        </Typography>
                      </td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default PaymentHistory;
