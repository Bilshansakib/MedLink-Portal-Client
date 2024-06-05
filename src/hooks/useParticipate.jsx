import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useParticipate = () => {
  const axiosSecure = useAxiosSecure();
  const { data: participator = [], refetch } = useQuery({
    queryKey: ["participator"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/participator`);
      return res.data;
    },
  });
  return [participator, refetch];
};

export default useParticipate;
