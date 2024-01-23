import Banner from './Banner/Banner'
import BistroBanner from './BistroBanner/BistroBanner'
import CallUs from './CallUs/CallUs'
import Category from './Category/Category'
import RecommendsItems from './RecommendsItems/RecommendsItems'

import PopularMenu from './PopularMenu/PopularMenu'
import Feature from './Feature/Feature'
import Testimonials from './Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='px-5'>
        <Category></Category>
        <BistroBanner></BistroBanner>
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
        <RecommendsItems></RecommendsItems>
        <Feature></Feature>
        <Testimonials></Testimonials>
      </div>
    </div>
  )
}

export default Home
