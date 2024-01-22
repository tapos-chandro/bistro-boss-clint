import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="">
            <footer className="lg:flex">
                <div className="lg:w-1/2">
                <aside className="bg-footer-bg-one py-24 lg:text-right text-[#fff]">
                    
                    <div className="flex lg:justify-end lg:pr-40 justify-center">
                    
                    <div>
                    <header className="footer-title">CONTACT US</header>
                    <p>123 ABS Street, Uni 21, Bangladesh </p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                    </div>
                </aside> 
                </div>
                <nav className="bg-footer-bg-tow lg:w-1/2 lg:pl-40  py-24">
                    <div className="flex lg:justify-start justify-center">
                    
                    <div className="grid grid-flow-col gap-4 text-[#FFFFFF]">
                        <div>
                            <header className="footer-title  normal-case">Follow US</header> 
                            <p>Join us on social media</p>
                            <div className="flex gap-5 text-2xl py-5">
                            <FaFacebookF />
                            <FaTwitter/>
                            <FaInstagram/>
                            </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </footer>
            <aside className="bg-[#151515] py-3">
                <p className="text-center text-primary-text">Copyright © CulinaryCloud. All rights reserved.</p>
            </aside>
        </div>
    );
};

export default Footer;