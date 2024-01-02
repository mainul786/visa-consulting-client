import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import app from '../../../firebase/firebase.config';

export const UserContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
        };

        const googleLogin = () =>{
            setLoading(true);
            return signInWithPopup(auth, googleProvider)
        };

        const logOut = () =>{
            setLoading(true);
            return signOut(auth)
        }
        
        useEffect(()=>{
            const unsubsCribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            })
            return () => unsubsCribe()
            
        }, [])
    
    const authInfo = {
        user,
        login,
        loading,
        googleLogin,
        logOut,
        createUser
    };
    
    return (
       <UserContext.Provider value={authInfo}>
        {children}
       </UserContext.Provider>
    );
};

export default AuthContext;