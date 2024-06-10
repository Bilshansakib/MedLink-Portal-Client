import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";

const useSortSearchMachine = (asc, search) => {
  const [camp, setCamps] = useState([]);
  useEffect(() => {
    axiosSecure(
      `/camps/sort/?sort=${asc ? "asc" : "desc"}&search=${search}`
    ).then((res) => setCamps(res.data));
  }, [asc, search]);
  return camp;
};

export default useSortSearchMachine;
