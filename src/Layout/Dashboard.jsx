import { Link, NavLink, Outlet } from "react-router-dom"
import { TfiMenuAlt } from "react-icons/tfi";
import { AiFillHome } from "react-icons/ai";
import { FaUtensils } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className='container mx-auto px-5 lg:px-0 '>
      <div className="lg:flex">
        <div className="lg:w-80 bg-[rgb(209,160,84)] lg:h-screen ">
            <div className="p-5">
            <Link to={'/dashboard'} ><span className="text-[#151515] text-2xl font-black">BISTRO BOSS</span><br/><span className="text-lg font-bold uppercase tracking-[6.647px] text-[#151515]">Restaurant</span></Link>
            </div>
            <div>
            <ul className="menu text-[#151515] rounded-box uppercase py-5">
                <li className="my-1">
                    <NavLink to={'/dashboard/home'} >
                    <AiFillHome  className="text-2xl" />
                    Admin Home
                    </NavLink>
                </li>
                <li className="my-1">
                    <NavLink to={'/dashboard/addItems'} >
                    <FaUtensils className="text-2xl"/>
                    add items
                    </NavLink>
                </li>
                <li className="my-1">
                    <NavLink to={'/dashboard/manageItems'} >
                    <TfiMenuAlt  className="text-2xl"/>
                    manage items</NavLink>
                </li>
                <li className="my-1">
                    <NavLink to={'/dashboard/booking'} >
                    <FaBook  className="text-2xl"/>
                    Manage bookings</NavLink>
                </li>
        
           
            </ul>
            </div>
        </div>
        <div className="bg-[#F6F6F6] lg:w-full lg:px-10">
            <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
