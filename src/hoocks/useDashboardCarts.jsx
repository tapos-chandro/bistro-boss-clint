import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useDashboardCarts = () => {
    const axiosSecure = useAxiosSecure()

    const {data:dashboardCarts, refetch } = useQuery({
        queryKey:['DashboardCarts'],
        queryFn: () => axiosSecure.get('/carts')
            
    })
    return [dashboardCarts ,refetch]

};

export default useDashboardCarts;