import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useParticipator = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: participator = [], refetch } = useQuery({
    queryKey: ["registered", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/registered/${user.email}`);
      return res.data;
    },
  });
  return [participator, refetch];
};

export default useParticipator;
