import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import app from '../../../firebase/firebase.config';

export const UserContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
        };

        const googleLogin = () =>{
            return signInWithPopup(auth, googleProvider)
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
        googleLogin
    };
    
    return (
       <UserContext.Provider value={authInfo}>
        {children}
       </UserContext.Provider>
    );
};

export default AuthContext;