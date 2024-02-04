import { NavLink, Outlet } from "react-router-dom";
import './Navber/navbar.css'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCarts from "../hoocks/useCarts";



const NavBar = () => {

    const {user,logOut} = useContext(AuthContext)

    const [carts] = useCarts()


    const handleLogOut = () =>{
        logOut()
    }

    const navLinks = <>
    
    <li className="mx-2 uppercase"><NavLink to={'/'} className=''>Home</NavLink></li>
    <li className="mx-2 uppercase"><NavLink to={'/contact'} className=''>CONTACT us</NavLink></li>
    <li className="mx-2 uppercase"><NavLink to={'/dashboard/home'} className=''>DASHBOARD</NavLink></li>
    <li className="mx-2 uppercase"><NavLink to={'/menu'} className=''>Our Menu</NavLink></li>
    <li className="mx-2 uppercase"><NavLink to={'/shop/offered'} className=''>Our Shop</NavLink></li>
    <li className="mx-2 uppercase"><NavLink to={'/dashboard/manageItems'} className=''>
    <div className="indicator">
    <FaCartShopping className="text-2xl"/>
          <span className="badge  indicator-item bg-[#ff1100e7] text-primary-text ">{
          carts?.data?.length
          }</span>
        </div>
        </NavLink></li>
    {
        user?.email ? <li className="mx-2 uppercase "><div className="flex"><p>{user?.displayName}</p><button onClick={handleLogOut}>Log Out</button></div></li>:
        <li className="mx-2 uppercase"><NavLink to={'/signUp'} className=''>SIGN UP</NavLink></li>
    }
   
    </>

 




    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="flex flex-col drawer-content ">
                {/* Navbar */}
                <div className=" navbar bg-[#15151580] z-40 text-primary-text fixed container ">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
                <div className="flex-1 px-2 mx-2">
                    <div className="uppercase">
                    <span className="font-extrabold lg:text-3xl text-primary-text">BISTRO BOSS</span><br></br> <span className="lg:text-2xl text-primary-text tracking-[8px]">Restaurant</span>
                    </div>
                </div>
                <div className="flex-none hidden lg:block ">
                    <ul className="menu menu-horizontal ">
                    {/* Navbar menu content here */}
                    {
                        navLinks
                    }
                    </ul>
                </div>
                </div>
                {/* Page content here */}
                <Outlet></Outlet>
            </div> 
            <div className="z-50 drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="min-h-full p-4 menu w-80 bg-neutral-700 text-primary-text">
                {/* Sidebar content here */}
                {navLinks}
                </ul>
            </div>
            </div>
    );
};

export default NavBar;