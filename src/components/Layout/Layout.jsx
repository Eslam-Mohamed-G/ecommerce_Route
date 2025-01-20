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
            <div className='min-h-dvh container mx-auto px-5 pt-24'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Templates;
