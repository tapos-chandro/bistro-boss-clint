import Banner from "../../Shared/Banner";
import contactBg from '../../assets/contact/banner.jpg'
import SectionTitle from "../../components/SectionTitle";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbClockHour3 } from "react-icons/tb";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";

const ContactUs = () => {


    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const currentUser = {
            name,
            email,
            message
        }
    
        emailjs.send(import.meta.env.VITE_SERVICE_ID, 'email-services', currentUser, import.meta.env.VITE_PUBLIC_kEY)
          .then((result) => {
              console.log(result);
              if(result.status == 200){
                Swal.fire({
                    title: "successfully",
                    text: "message send successfully",
                    icon: "success"
                  });
              }
          }, (error) => {
              console.log(error.text);
          });
      };


    return (
        <div>
            <Banner heading='CONTACT US' paragraph='Would you like to try a dish?' backgroundImg={contactBg}></Banner>
            <div className="my-10">
                <SectionTitle subTitle='---Visit Us---' mainTitle='OUR LOCATION'></SectionTitle>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-28">
                    <div className="text-center">
                        <div className="flex justify-center bg-[#D1A054] py-3">
                            <MdPhoneInTalk className="text-3xl text-neutral-50" />
                        </div>
                        <div className="my-10">
                        <h1 className="text-neutral-950 text-2xl font-medium">Phone</h1>
                        <p>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center bg-[#D1A054] py-3">
                            <FaLocationDot className="text-3xl text-neutral-50"/>
                        </div>
                        <div className="my-10">
                        <h1 className="text-neutral-950 text-2xl font-medium">ADDRESS</h1>
                        <p>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center bg-[#D1A054] py-3">
                            <TbClockHour3 className="text-3xl text-neutral-50"/>
                        </div>
                        <div className="my-10">
                        <h1 className="text-neutral-950 text-2xl font-medium">WORKING HOURS</h1>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* Our location end */}
            <SectionTitle subTitle='---Send Us a Message---' mainTitle='CONTACT FORM'></SectionTitle>
            <div className="bg-[#F3F3F3] flex justify-center py-20">
                <div className="w-1/2">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label><br/>
                    <input type="text" name="name" className="w-full py-3 my-3 px-5" placeholder="Enter your name"  required/><br/>
                    <label>Email</label><br/>
                    <input type="email" name="email" className="w-full py-3 my-3 px-5" placeholder="Enter your email"  required/><br/>
                    <label>Message</label><br/>
                    <textarea name="message"  className="w-full py-3 my-3 px-5" placeholder="Enter your message" required/><br/>
                    <div className="flex justify-center">
                    <input type="submit" value="Send Message" className="px-20 py-3 cursor-pointer  text-[#F3F3F3] bg-[#D1A054] text-xl"/> 
                    </div>                                                                                         
                </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;