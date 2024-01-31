import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useEffect, useState } from 'react'
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'
import { BiSolidQuoteLeft } from "react-icons/bi";
import SectionTitle from '../../../../components/SectionTitle'
import useAxiosSecure from '../../../../hoocks/useAxiosSecure'



const Testimonials = () => {
  const [review, setReview] = useState([])
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    // fetch('reviews.json')
    //   .then(res => res.json())
    //   .then(data => {
    //     setReview(data)
    //   })

    axiosSecure.get('/reviews')
    .then(data => {
      setReview(data.data)
    })
    
  }, [])


  return (
    <section className='py-20'>
      <SectionTitle
        subTitle='---What Our Clients Say---'
        mainTitle='TESTIMONIALS'
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
        {review.map(reviewItem => (
          <SwiperSlide key={reviewItem._id}>
            <div className='w-10/12 mx-auto'>
              <div className='flex justify-center my-6'>
              <Rating className='text-center flex justify-center' style={{ maxWidth: 180 }} value={reviewItem.rating} readOnly />
              </div>
              <div className='flex justify-center '>
              <BiSolidQuoteLeft className='text-8xl text-neutral-950' />
              </div>
              <p className='text-xl'>{reviewItem.details}</p>
              <h1 className='text-center text-[#CD9003] text-3xl'>
                {reviewItem.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials
