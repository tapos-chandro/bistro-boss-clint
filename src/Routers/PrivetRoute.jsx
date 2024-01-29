import PropTypes from "prop-types"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()

    return user ? children : <Navigate to={'/login'} state={location?.pathname}/>
};

PrivetRoute.propTypes = {
  children: PropTypes.any
}

export default PrivetRoute;