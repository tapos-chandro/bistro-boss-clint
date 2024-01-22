import Banner from "./Banner/Banner";
import BistroBanner from "./BistroBanner/BistroBanner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Category></Category>
            <BistroBanner></BistroBanner>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;