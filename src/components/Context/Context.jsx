import React, { createContext, useEffect, useState } from 'react';
import style from './Context.module.css';

export const CounterContext = createContext();

function CounterContextProvider({ children }) {
    
    const [count, setCount] = useState(0);
    const [userName, setUserName] = useState('ahmed');

    useEffect(() => {

    }, []);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider;
