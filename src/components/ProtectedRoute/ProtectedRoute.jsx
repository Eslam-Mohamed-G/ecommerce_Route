import React, { useContext, useEffect, useState } from 'react';
import style from './ProtectedRoute.module.css';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const token = JSON.parse(localStorage.getItem('userToken'));
    const [state, setstate] = useState();
    useEffect(() => {
        
        return () => {
            
        };
    }, []);

    return token?.token ? children : <Navigate to={'/login'} />
}

export default ProtectedRoute;
