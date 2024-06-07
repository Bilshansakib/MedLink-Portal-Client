import React from "react";
import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

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
  return (
    <div>
      <SectionTitle
        subHeading={"Payment History"}
        heading={"Check Your Past And Current Transactions"}
      ></SectionTitle>
    </div>
  );
};

export default PaymentHistory;
