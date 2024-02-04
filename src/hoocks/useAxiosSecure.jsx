import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-5u30.onrender.com/'
  });


const useAxiosSecure = () => {
   return axiosSecure
};

export default useAxiosSecure;