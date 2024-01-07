import PropTypes from "prop-types"
import { createContext, useState } from "react";




export const AuthContext = createContext()


const AuthProvider = ({children}) => {

    const [theme, setTheme] = useState()


    const authInfo = {
        theme,
        setTheme,
    }
    


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
  children: PropTypes.any
}

export default AuthProvider;