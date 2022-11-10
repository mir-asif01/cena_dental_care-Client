import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const ContextProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoader] = useState(true)

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
   
    const signUpNewUser = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const addDisplayNamePhotoURL=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName : name, photoURL : photo
        })
    }

    const userLogin =(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userSignOut = ()=>{
        setLoader(true)
        return signOut(auth)
    }

    const googleSignIn = ()=>{
        setLoader(true)
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoader(false)
        })

        return ()=> unsubscribe()
        
    },[])

    const authInfo = {user,signUpNewUser,addDisplayNamePhotoURL,setUser,userLogin,userSignOut,googleSignIn,loading}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextProvider;