import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.css';

function Templates() {
    const [state, setstate] = useState();
    useEffect(() => {
        
        return () => {
            
        };
    }, []);

    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Templates;
