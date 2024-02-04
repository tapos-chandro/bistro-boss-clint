import { BsFillCalendarEventFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { FaProductHunt } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { Helmet } from "react-helmet-async";

const AdminHome = () => {
    return (
        <div className="pt-20">
             <Helmet>
                <title>Bistro Boss Restaurant । Admin Home </title>
            </Helmet>
            <div className="grid justify-center grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="py-10 rounded-lg bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex items-center text-5xl gap-5 justify-center ">
                    <div className="">
                    <BsFillCalendarEventFill className="text-[#fff]"/>
                    </div>
                    <div >
                        <h1 className="text-5xl font-extrabold text-[#fff]">1000</h1>
                        <h3 className="text-2xl text-[#fff]">Revenue</h3>
                    </div>
                </div>
                <div className="py-10 rounded-lg bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] flex items-center text-5xl gap-5 justify-center ">
                    <div className="">
                    <HiUserGroup className="text-[#fff]"/>
                    </div>
                    <div >
                        <h1 className="text-5xl font-extrabold text-[#fff]">1000</h1>
                        <h3 className="text-2xl text-[#fff]">Revenue</h3>
                    </div>
                </div>
                <div className="py-10 rounded-lg bg-gradient-to-r from-[#FE4880] to-[#FECDE9] flex items-center text-5xl gap-5 justify-center ">
                    <div className="">
                    <FaProductHunt className="text-[#fff]"/>
                    </div>
                    <div >
                        <h1 className="text-5xl font-extrabold text-[#fff]">1000</h1>
                        <h3 className="text-2xl text-[#fff]">Revenue</h3>
                    </div>
                </div>
                <div className="py-10 rounded-lg bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] flex items-center text-5xl gap-5 justify-center ">
                    <div className="">
                    <CiDeliveryTruck className="text-[#fff]"/>
                    </div>
                    <div >
                        <h1 className="text-5xl font-extrabold text-[#fff]">1000</h1>
                        <h3 className="text-2xl text-[#fff]">Revenue</h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;