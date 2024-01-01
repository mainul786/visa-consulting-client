import React, { useContext } from 'react';
import { UserContext } from '../context/AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(UserContext);
    if(loading){
        return <div>Lodding....</div>
    }
    if (!user) {
     return <Navigate to='/login'></Navigate>
    }
    return children;
    
};

export default PrivateRoute;