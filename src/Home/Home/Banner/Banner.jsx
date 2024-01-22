import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Banner = () => {
    return (
        <Carousel className="-mt-[100px]">
        <div className="">
            <img src="https://i.postimg.cc/VLdHB0b6/01.jpg"  />
        </div >
        <div className="">
            <img src="https://i.postimg.cc/MGP9QWKR/02.jpg" /> 
        </div>
        <div className="">
            <img src="https://i.postimg.cc/wxtGDsNB/03.png" />
        </div>
        <div className="">
            <img src="https://i.postimg.cc/rw9nq1Bf/04.jpg" />
        </div>
        <div className="">
            <img src="https://i.postimg.cc/xjWF5TG3/05.png" />
        </div>
        <div className="">
            <img src="https://i.postimg.cc/W3y02zpW/06.png" />
        </div>
    </Carousel>
    );
};

export default Banner;