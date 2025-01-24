import React, { useEffect, useState } from 'react';
import Navbar from '../1_Navbar/Navbar.jsx';
import Footer from '../6_Footer/Footer.jsx';
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
            <div className='min-h-dvh container mx-auto px-5 pt-32 dark:bg-slate-950'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Templates;
