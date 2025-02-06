import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    // user data from localstorage
    const storedUser = localStorage.getItem('userToken');
    const user = storedUser ? JSON.parse(storedUser) : null;

    return user?.token ? children : <Navigate to={'/login'} />
}

export default ProtectedRoute;
