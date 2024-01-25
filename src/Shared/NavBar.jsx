import { NavLink, Outlet } from "react-router-dom";
import './Navber/navbar.css'


const NavBar = () => {
    const navLinks = <>
    
    <li className="mx-2 uppercase"><NavLink to={'/'} className=''>Home</NavLink></li>
    <li className="mx-2 uppercase"><NavLink to={'/contact'} className=''>CONTACT us</NavLink></li>
    <li className="mx-2 uppercase"><NavLink to={'/dashboard'} className=''>DASHBOARD</NavLink></li>
    <li className="mx-2 uppercase"><NavLink to={'/menu'} className=''>Our Menu</NavLink></li>
    <li className="mx-2 uppercase"><NavLink to={'shop'} className=''>Our Shop</NavLink></li>
    <li className="mx-2 uppercase"><NavLink to={'/login'} className=''>SIGN OUT</NavLink></li>
   
    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col ">
                {/* Navbar */}
                <div className=" navbar bg-[#15151580] z-40 text-primary-text fixed container ">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
                <div className="flex-1 px-2 mx-2">
                    <div className="uppercase">
                    <span className="lg:text-3xl font-extrabold text-primary-text">BISTRO BOSS</span><br></br> <span className="lg:text-2xl text-primary-text tracking-[8px]">Restaurant</span>
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
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 min-h-full bg-neutral-700 text-primary-text">
                {/* Sidebar content here */}
                {navLinks}
                </ul>
            </div>
            </div>
    );
};

export default NavBar;