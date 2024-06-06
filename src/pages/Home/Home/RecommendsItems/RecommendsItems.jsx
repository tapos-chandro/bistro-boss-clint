
import RecommendsItem from "./RecommendsItem/RecommendsItem";
import SectionTitle from "../../../../components/SectionTitle";
import useMenu from "../../../../hoocks/useMenu";




const RecommendsItems = () => {
    // const [menu , setMenu] = useState([])

    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const menuItems = data.filter(findItem => findItem.category == 'offered')
    //         setMenu(menuItems)
    //     })
    // },[])

    const [menu] = useMenu()
    const menuItems = menu?.filter(findItem => findItem?.category == 'offered')

    return (
        <section className="py-20">
            <SectionTitle subTitle='---Should Try---' mainTitle='CHEF RECOMMENDS'></SectionTitle>
            <div className="grid gap-20 mt-16 lg:grid-cols-3 md:grid-cols-2">
                {
                    menuItems?.map(item => <RecommendsItem key={item._id} item={item}></RecommendsItem>)
                }
            </div>
        </section>
    );
};

export default RecommendsItems;