import { Helmet } from "react-helmet-async";
import { RiDeleteBin5Line } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { HiMiniUserGroup } from "react-icons/hi2";
import useAxiosSecure from "../../../hoocks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUser = () => {

    const axiosSecure = useAxiosSecure()

    const { data:user, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res
        }})

    const handleDelateUser = (id) =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users?id=${id}`)
                .then(res => {
                    console.log(res)

                    Swal.fire({
                        title: "Deleted!",
                        text: "Deleted successfully",
                        icon: "success"
                      });
                    refetch()
                })

            }
          });
    }
    
    const handleMackAdminUser = (id) =>{
        axiosSecure.put(`/users/Admin?id=${id}`)
        .then(res => {
            console.log(res)
            refetch()
        })
        
    }

    return (
        <div className="pt-10">
             <Helmet>
                <title>Bistro Boss Restaurant । Manage Items </title>
            </Helmet>
            <SectionTitle subTitle='---How many??---' mainTitle='MANAGE ALL USERS'></SectionTitle>
            
            <div className="lg:mx-20">
            <h1 className="py-5 font-bold text-3xl text-[black]">Total items:{user?.data?.length} </h1>
            <div className="">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="bg-[#D1A054] text-primary-text uppercase py-5 rounded-md">
                        <th style={{borderRadius: '10px 0px 0px 0px'}}></th>
                        <th className="text-center">NAME</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">ROLE</th>
                        <th className="text-center" style={{borderRadius: '0px 10px 0px 0px'}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        user?.data?.map((dashboardCart , index)=>
                            <>
                            
                            <tr key={dashboardCart.email}>
                                
                                <td className="text-xl font-bold">
                                {index + 1}
                                </td>
                                <td className="text-center">
                                {dashboardCart.name}
                                </td>
                                <td className="text-center">{dashboardCart.email}</td>
                                <th className="text-center">
                                <div>
                                    {
                                        dashboardCart.role === 'Admin'?'Admin':<button className="btn btn-ghost btn-xs  bg-[#d19f54ff] text-primary-text h-full p-1 " onClick={() =>handleMackAdminUser(dashboardCart._id)}> <HiMiniUserGroup className=" text-primary-text hover:text-[black] text-3xl"/></button>
                                    }
                                </div>
                                </th>
                                <th className="text-center">
                                <div className="">
                                    <button className="btn btn-ghost btn-xs bg-[red] h-full p-1 text-primary-text " onClick={() =>handleDelateUser(dashboardCart._id)}><RiDeleteBin5Line className=" text-primary-text hover:text-[black] text-3xl"/></button>
                                </div>
                                </th>
                            </tr>
                            </>
                        )
                    }

                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;