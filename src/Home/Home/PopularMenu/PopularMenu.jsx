import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../../Shared/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(findItem => findItem.category == 'popular')
            setMenu(popularItems)
        })
    },[])


    return (
        <section className="my-14">
            <SectionTitle mainTitle={'FROM OUR MENU'} subTitle={'---Popular Items---'} ></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 pt-10">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center py-6">
            <button className="btn bg-transparent border-b-4 border-[black] border-0 text-[#1F2937] text-xl ">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;