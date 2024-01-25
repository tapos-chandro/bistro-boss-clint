import Footer from '../Shared/Footer'
import NavBar from '../Shared/NavBar'

const Main = () => {
  return (
    <div className=''>
      <div className='container mx-auto'>
        <NavBar></NavBar>
      </div>
      <div className='bg-black'>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Main
