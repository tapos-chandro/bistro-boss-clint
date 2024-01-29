import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types"
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";




export const AuthContext = createContext()


const AuthProvider = ({children}) => {


    const googleProvider = new GoogleAuthProvider();

    const [theme, setTheme] = useState()
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignUp = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const updateUserProfile = (name, photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo})
    }

    const logOut = () =>{
        setLoading(true)
        signOut(auth)
    }


    useEffect(() => {


        const unsubscribe = onAuthStateChanged( auth,  currentUser => {
            setLoading(true)

           setUser(currentUser);
            if(currentUser){
                setLoading(false)
            }
        })

        return () => unsubscribe();
      }, []);





    const authInfo = {
        theme,
        setTheme,
        user,
        loading,
        setUser,
        createUser,
        googleSignUp,
        updateUserProfile,
        logOut,
        logInUser
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