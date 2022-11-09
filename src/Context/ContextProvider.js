import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const ContextProvider = ({children}) => {

    const [user,setUser] = useState(null)

    const auth = getAuth(app)
   
    const signUpNewUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const addDisplayNamePhotoURL=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName : name, photoURL : photo
        })
    }

    const userLogin =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })

        return ()=> unsubscribe()
        
    },[])

    const authInfo = {user,signUpNewUser,addDisplayNamePhotoURL,setUser,userLogin}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextProvider;