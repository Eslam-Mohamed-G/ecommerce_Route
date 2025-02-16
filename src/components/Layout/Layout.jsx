import React, { useEffect, useState } from 'react';
import Navbar from '../1_Navbar/Navbar.jsx';
import Footer from '../12_Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.css';
import { Toaster } from 'react-hot-toast';

function Templates() {
    const [state, setstate] = useState();
    useEffect(() => {
        
        return () => {
            
        };
    }, []);

    return (
        <div>
            <Navbar/>
            <div className='min-h-dvh overflow-hidden mx-auto pt-[108px] pb-8 dark:bg-slate-950'>
                <Outlet/>
                <Toaster/>
            </div>
            <Footer/>
        </div>
    )
}

export default Templates;
