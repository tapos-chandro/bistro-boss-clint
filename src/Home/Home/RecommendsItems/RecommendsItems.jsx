import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import RecommendsItem from "./RecommendsItem/RecommendsItem";




const RecommendsItems = () => {
    const [menu , setMenu] = useState([])

    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const menuItems = data.filter(findItem => findItem.category == 'offered')
            setMenu(menuItems)
        })
    },[])



    return (
        <section className="py-20">
            <SectionTitle subTitle='---Should Try---' mainTitle='CHEF RECOMMENDS'></SectionTitle>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-20 mt-16">
                {
                    menu.map(item => <RecommendsItem key={item._id} item={item}></RecommendsItem>)
                }
            </div>
        </section>
    );
};

export default RecommendsItems;