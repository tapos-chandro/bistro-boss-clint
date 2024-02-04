import { Link, NavLink, Outlet } from "react-router-dom"
import { TfiMenuAlt } from "react-icons/tfi";
import { AiFillHome } from "react-icons/ai";
import { FaUtensils } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdShoppingBag } from "react-icons/md";
import { MdForwardToInbox } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className='container px-5 mx-auto lg:px-0 '>
      <div className="lg:flex">
        <div className="lg:w-80 bg-[rgb(209,160,84)]  lg:pt-5 lg:pb-20">
            <div className="p-5">
            <Link to={'/dashboard/home'} ><span className="text-[#151515] text-2xl font-black">BISTRO BOSS</span><br/><span className="text-lg font-bold uppercase tracking-[6.647px] text-[#151515]">Restaurant</span></Link>
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
            <hr />

            </div>

            <div>
            <ul className="menu text-[#151515] rounded-box uppercase py-5">
                <li className="my-1">
                    <NavLink to={'/'} >
                    <AiFillHome  className="text-2xl" />
                    Home
                    </NavLink>
                </li>
                <li className="my-1">
                    <NavLink to={'/menu'} >
                    <IoMenu className="text-2xl"/>
                    Menu
                    </NavLink>
                </li>
                <li className="my-1">
                    <NavLink to={'/shop/offered'} >
                    <MdShoppingBag className="text-2xl"/>
                    Shop</NavLink>
                </li>
                <li className="my-1">
                    <NavLink to={'/contact'} >
                    <MdForwardToInbox className="text-2xl"/>
                    Contact</NavLink>
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
