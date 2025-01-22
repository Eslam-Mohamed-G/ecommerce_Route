import React, { useEffect, useState } from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Templates() {
    const [isScroll, setIsScroll] = useState(false);
    function handleScroll (){
        if(window.scrollY > 10){
            setIsScroll(true);
        }else {
            setIsScroll(false);
        }
    }
    window.addEventListener("scroll", handleScroll);
    useEffect(() => {
        
        return () => {
            
        };
    }, []);

    return (
            <>
        <div className={`navbar w-full backdrop-blur-sm fixed top-0 transition-all ease-in-out duration-500 z-50`}>
            <div className="w-full bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform">
                <div className='container mx-auto px-8 sm:px-12 py-2 flex justify-between'>
                    <h1 className='block text-lg font-bold'><span className='flex gap-1 items-center'><i className="fa-solid fa-cart-plus"></i>FreshCart</span></h1>
                    <ul className='flex gap-5'>
                        <li><NavLink to={'/register'}>Register</NavLink></li>
                        <li><NavLink to={'/login'}>Login</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className={`container mx-auto px-8 sm:px-12 bg-slate-400/30 flex justify-between align-middle ${isScroll ? 'py-3' : 'py-5'}`}>
                <button className='block sm:hidden'><i className="fa-solid fa-bars"></i></button>
                <div className='hidden sm:block'>
                    <ul className='flex gap-5'>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink>Products</NavLink></li>
                        <li><NavLink>Brands</NavLink></li>
                        <li><NavLink>Categories</NavLink></li>
                        <li><NavLink>Cart</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Templates;
