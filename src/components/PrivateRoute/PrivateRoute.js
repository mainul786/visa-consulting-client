import React, { useContext } from 'react';
import { UserContext } from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { loading, user } = useContext(UserContext);
    if(loading){
        return  <Spinner animation="border" variant="danger" />
    }
    if (!user) {
     return <Navigate to='/login' state={{from: location}} replace />
    }
    return children;
    
};

export default PrivateRoute;