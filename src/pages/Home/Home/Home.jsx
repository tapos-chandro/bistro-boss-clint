import Banner from './Banner/Banner'
import HomeCover from './HomeCover/HomeCover'
import CallUs from './CallUs/CallUs'
import Category from './Category/Category'
import RecommendsItems from './RecommendsItems/RecommendsItems'

import PopularMenu from './PopularMenu/PopularMenu'
import Feature from './Feature/Feature'
import Testimonials from './Testimonials/Testimonials'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
        <Helmet>
        <title>Bistro Boss Restaurant । Home</title>
      </Helmet>
      <Banner></Banner>
      <div className='px-5 lg:px-0'>
        <Category></Category>
        <HomeCover></HomeCover>
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
