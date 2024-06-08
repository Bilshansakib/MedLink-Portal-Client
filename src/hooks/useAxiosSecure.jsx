import axios from "axios";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:9000",
});

const useAxiosSecure = () => {
  // const navigate = useNavigate();
  // const { logOut } = useAuth();

  // request interceptor to add authorization header for every secure call to teh api
  axiosSecure.interceptors.request.use(
    function (config) {
      console.log("dekho di ki somossa");
      const token = localStorage.getItem("access-token");
      // console.log('request stopped by interceptors', token)
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // console.log('status error in the interceptor', status);
      // for 401 or 403 logout the user and move the user to the login
      if (status === 401 || status === 403) {
        // todo: log out user and navigate login
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
