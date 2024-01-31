import PropTypes from "prop-types"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

console.log(loading)

    if(loading){
   


      
      return <div className="w-full py-40">
        
        <MagnifyingGlass 
      visible={true}
      height="80"
      width="80"
      // ariaLabel="magnifying-glass-loading"
      wrapperStyle={{width:'100%', height:'20%'}}
      // wrapperClass="magnifying-glass-wrapper"
      glassColor="#fff"
      color="#BB8506"
    
      />
      </div>
    }
    if(user?.email){
      return children
    }



    return <Navigate to={'/login'} state={location?.pathname}/>
};

PrivetRoute.propTypes = {
  children: PropTypes.any
}

export default PrivetRoute;