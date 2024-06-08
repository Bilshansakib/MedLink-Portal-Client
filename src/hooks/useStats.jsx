import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";

const useStats = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats, refetch } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => await axiosSecure("/stats"),
  });
  return [stats, refetch];
};

export default useStats;
