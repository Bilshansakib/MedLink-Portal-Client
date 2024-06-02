import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useCamp = () => {
  const axiosSecure = useAxiosSecure();

  const [camp, setCamp] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:9000/camp")
      .then((res) => res.json())
      .then((data) => {
        setCamp(data);
        setLoading(false);
      });
  }, []);
  return [camp, loading];
};

export default useCamp;
