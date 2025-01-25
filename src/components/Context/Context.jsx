import React, { createContext, useEffect, useState } from 'react';
import style from './Context.module.css';

export const dataContext = createContext();

function StoreContextProvider({ children }) {

    const [count, setCount] = useState(0);
    const [userLogin, setUserLogin] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('userToken');

        return () => {
            setUserLogin(token ? JSON.parse(token) : [])
        };
    }, []);

    return (
        <dataContext.Provider value={{ count, setCount, userLogin, setUserLogin }}>
            {children}
        </dataContext.Provider>
    )
}

export default StoreContextProvider;