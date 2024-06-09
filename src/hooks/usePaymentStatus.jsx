import { useQuery } from "@tanstack/react-query";
import { getStatus } from "../api/camp";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePaymentStatus = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: paidUser = [], refetch } = useQuery({
    queryKey: ["paidUser"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/paidUser`);
      return res.data;
    },
  });
  return [paidUser, refetch];
};

export default usePaymentStatus;
