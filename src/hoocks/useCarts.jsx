import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCarts = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const {data:carts, refetch } = useQuery({
        queryKey:['carts', user?.email],
        queryFn: () => axiosSecure.get(`/carts?email=${user?.email}`)
            
    })
    return [carts ,refetch]

};

export default useCarts;