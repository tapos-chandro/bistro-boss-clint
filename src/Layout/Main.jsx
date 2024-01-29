import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Shared/Footer'
import NavBar from '../Shared/NavBar'

const Main = () => {
  const location = useLocation()
  const noNavBarFooter = location.pathname.includes('/signUp') || location.pathname.includes('/login')

  return (
    <div className=''>
      <div className='container mx-auto'>
        {noNavBarFooter || <NavBar></NavBar>}
      </div>
      {noNavBarFooter && <Outlet></Outlet>}
      <div className='bg-black'>
        { noNavBarFooter ||<Footer></Footer>}
      </div>
    </div>
  )
}

export default Main
