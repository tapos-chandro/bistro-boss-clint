import PropTypes from "prop-types"
import { MagnifyingGlass } from 'react-loader-spinner'
import useAdmin from '../hoocks/useAdmin'
import useAuth from '../hoocks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const [isAdmin, isAdminLoading] = useAdmin()
  console.log('admin router',isAdminLoading)
  const location = useLocation()


  if (loading) {
    return (
      <div className='w-full py-40'>
        <MagnifyingGlass
          visible={true}
          height='80'
          width='80'
          // ariaLabel="magnifying-glass-loading"
          wrapperStyle={{ width: '100%', height: '20%' }}
          // wrapperClass="magnifying-glass-wrapper"
          glassColor='#fff'
          color='#BB8506'
        />
      </div>
    )
    
  }
  console.log(isAdmin,'admin check')

  if (user?.email && isAdmin) {
    return children
  }

  return <Navigate to={'/'} state={location?.pathname} />
}

AdminRoute.propTypes = {
  children: PropTypes.any
}

export default AdminRoute
