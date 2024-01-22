import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';

const Category = () => {
    return (
        <div className="mt-16 mx-5">
            <SectionTitle mainTitle={'ORDER ONLINE'} subTitle={'---From 11:00am to 10:00pm---'}/>
            <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper my-10 lg:my-20"
                >
                    <SwiperSlide>
                        <img src="https://i.postimg.cc/rpcJbDz5/slide1.jpg" className="w-full lg:h-[500px]" alt="" />
                        <div className="-mt-28 pb-16">
                        <h3 className="text-3xl text-center text-primary-text">Salads</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.postimg.cc/vBZvYCrB/slide2.jpg" className="w-full lg:h-[500px]" alt="" />
                        <div className="-mt-28 pb-16">
                        <h3 className="text-3xl text-center  text-primary-text">Soups</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.postimg.cc/85Xmjw4b/slide3.jpg" className="w-full lg:h-[500px]" alt="" />
                       <div className="-mt-28 pb-16">
                       <h3 className="text-3xl text-center  text-primary-text">pizzas</h3>
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.postimg.cc/PJLzZZFn/slide4.jpg" className="w-full lg:h-[500px]" alt="" />
                        <div className="-mt-28 pb-16">
                        <h3 className="text-3xl text-center  text-primary-text">desserts</h3>
                        </div>
                    </SwiperSlide>
                    
            </Swiper>
            
        </div>
    );
};

export default Category;