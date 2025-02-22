import { axiosSecure } from "../hooks/useAxiosSecure";

export const getAllCamps = async () => {
  const { data } = await axiosSecure("/camps");
  return data;
};

// Get user role
export const getRole = async (email) => {
  const { data } = await axiosSecure(`/user/${email}`);
  return data.role;
};

// Get user payment status
export const getStatus = async (email) => {
  const { data } = await axiosSecure(`/payments/${email}`);
  return data.role;
};
