import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCamp = () => {
  const axiosSecure = useAxiosSecure();

  const {
    refetch,
    data: camp = [],
    isPending,
  } = useQuery({
    queryKey: ["camps"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/camps`);
      return res.data;
    },
  });
  return [camp, refetch, isPending];
  // useEffect(() => {
  //   fetch("http://localhost:9000/camps")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCamp(data);
  //       setLoading(false);
  //     });
  // }, []);
  // return [camp, loading];
};

export default useCamp;
