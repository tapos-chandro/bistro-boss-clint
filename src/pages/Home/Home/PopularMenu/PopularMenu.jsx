import SectionTitle from "../../../../components/SectionTitle";
import MenuItem from './../../../../Shared/MenuItem';
import Button from './../../../../components/Button';
import useMenu from "../../../../hoocks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();

    const popularItems = menu?.filter(item => item.category === 'popular')


    return (
        <section className="my-14">
            <SectionTitle mainTitle={'FROM OUR MENU'} subTitle={'---Popular Items---'} ></SectionTitle>
            <div className="grid grid-cols-1 gap-5 pt-10 lg:grid-cols-2 lg:px-28">
                {
                    popularItems?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center py-6">
            <Button buttonText='View Full Menu'></Button>
            </div>
        </section>
    );
};

export default PopularMenu;