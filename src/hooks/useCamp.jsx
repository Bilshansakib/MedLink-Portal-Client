import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCamp = (asc) => {
  const axiosSecure = useAxiosSecure();

  const {
    refetch,
    data: camp = [],
    isPending,
  } = useQuery({
    queryKey: ["camps"],
    asc,
    queryFn: async () => {
      const res = await axiosSecure.get(`/camps?sort=${asc ? "asc" : "desc"}`);
      return res.data;
    },
  });
  return [camp, refetch, isPending];
  // useEffect(() => {
  //   fetch("https://project-finale-server.vercel.app/camps")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCamp(data);
  //       setLoading(false);
  //     });
  // }, []);
  // return [camp, loading];
};

export default useCamp;
