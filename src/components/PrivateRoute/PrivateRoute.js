import React, { useContext } from 'react';
import { UserContext } from '../context/AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(UserContext);
    if(loading){
        return  <Spinner animation="border" variant="danger" />
    }
    if (!user) {
     return <Navigate to='/login'></Navigate>
    }
    return children;
    
};

export default PrivateRoute;