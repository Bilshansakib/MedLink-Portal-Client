import { axiosSecure } from "../hooks/useAxiosSecure";

export const getAllCamps = async () => {
  const { data } = await axiosSecure("/camps");
  return data;
};
