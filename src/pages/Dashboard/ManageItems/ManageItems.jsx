import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle";
import useDashboardCarts from "../../../hoocks/useDashboardCarts";
import { RiDeleteBin5Line } from "react-icons/ri";
import useAxiosSecure from "../../../hoocks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageItems = () => {
    const [dashboardCarts,refetch] = useDashboardCarts()
    const axiosSecure = useAxiosSecure()

    const handleDelateItems = (_id) =>{
        
        axiosSecure.delete(`/carts?id=${_id}`)
        .then(res => {
            
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                


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
              });
        })

    }



    return (
        <div className="pt-10">
             <Helmet>
                <title>Bistro Boss Restaurant । Manage Items </title>
            </Helmet>
            <SectionTitle subTitle='---Hurry Up!---' mainTitle='MANAGE ALL ITEMS'></SectionTitle>
            
            <div className="lg:mx-20">
            <h1 className="py-5 font-bold text-3xl text-[black]">Total items:{dashboardCarts?.data?.length} </h1>
            <div className="">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="bg-[#D1A054] text-primary-text uppercase py-5 rounded-md">
                        <th style={{borderRadius: '10px 0px 0px 0px'}}>ITEM IMAGE</th>
                        <th className="text-center">ITEM NAME</th>
                        <th>PRICE</th>
                        <th className="text-center" style={{borderRadius: '0px 10px 0px 0px'}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        dashboardCarts?.data?.map(dashboardCart =>
                            <>
                            
                            <tr key={dashboardCart._id}>
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                    <div className="w-12 h-12 mask mask-squircle">
                                        <img src={dashboardCart.image} />
                                    </div>
                                    </div>
                                </div>
                                </td>
                                <td className="text-center">
                                {dashboardCart.name}
                                </td>
                                <td>${dashboardCart.price}</td>
                                <th className="text-center">
                                <div>
                                    <button className="btn btn-ghost btn-xs bg-[red] text-primary-text " onClick={() =>handleDelateItems(dashboardCart._id)}><RiDeleteBin5Line className=" text-primary-text hover:text-[black]"/></button>
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