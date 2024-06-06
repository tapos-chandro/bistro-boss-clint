import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle";
import { RiDeleteBin5Line } from "react-icons/ri";
import useAxiosSecure from "../../../hoocks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";



const ManageItems = () => {

    const axiosSecure = useAxiosSecure()

    const {  data:menu, refetch} = useQuery({
        queryKey: ['menuData'],
        queryFn: () =>
          axiosSecure.get('/menu').then(res =>
            res.data
          ),
    })


    
    const navigate = useNavigate()


    const handleDelateItems = (_id) =>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            

            if(result.isConfirmed){
                axiosSecure.delete(`/menu?id=${_id}`)
            .then(res => {
                
                if(res?.data.acknowledged == true){
                    if (result.isConfirmed) {
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                        });
                    }
                    refetch()
                }
            })
            }

            
          });


    }

    const handleUpdateItems = (_id) =>{


        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Update it!"
          }).then((result) => {
            

            if(result.isConfirmed){
                navigate(`/dashboard/updateItem/${_id}`)
            }

            
          });

    }
    


    refetch()

    return (
        <div className="pt-10">
             <Helmet>
                <title>Bistro Boss Restaurant । Manage Items </title>
            </Helmet>
            <SectionTitle subTitle='---Hurry Up!---' mainTitle='MANAGE ALL ITEMS'></SectionTitle>
            
            <div className="lg:mx-20">
            <h1 className="py-5 font-bold text-3xl text-[black]">Total items:{menu?.length} </h1>
            <div className="">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="bg-[#D1A054] text-primary-text uppercase py-5 rounded-md">
                        <th style={{borderRadius: '10px 0px 0px 0px'}}>ITEM IMAGE</th>
                        <th className="text-center">ITEM NAME</th>
                        <th>PRICE</th>
                        <th className="text-center" >Action</th>
                        <th className="text-center" style={{borderRadius: '0px 10px 0px 0px'}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        menu?.map(dashboardCart =>
                            <>
                            
                            <tr key={dashboardCart._id}>
                                
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                    <div className="w-12 h-12 mask mask-squircle">
                                        <img src={dashboardCart?.image} />
                                    </div>
                                    </div>
                                </div>
                                </td>
                                <td className="text-center">
                                {dashboardCart?.name}
                                </td>
                                <td>${dashboardCart?.price}</td>
                                <th className="text-center">
                                <div>
                                <button className="btn btn-ghost btn-xs bg-[#d19f54ff] py-2 pb-7 text-primary-text rounded " onClick={() =>handleUpdateItems(dashboardCart._id)}><BsPencilSquare className=" text-primary-text hover:text-[black] text-xl"/></button>
                                    
                                </div>
                                </th>
                                <th className="text-center">
                                <div>
                                <button className="btn btn-ghost btn-xs bg-[red] py-2 pb-7 text-primary-text  rounded" onClick={() =>handleDelateItems(dashboardCart._id)}><RiDeleteBin5Line className=" text-primary-text hover:text-[black] text-xl"/></button>
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

export default ManageItems;