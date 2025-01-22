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
        <div className={`navbar w-full bg-slate-400 fixed top-0 transition-all ease-in-out duration-500 ${isScroll ? 'py-4' : 'py-8'}`}>
            <div className='container mx-auto px-4 flex justify-between'>
                <h1 className='flex gap-1 items-center'><i className="fa-solid fa-cart-plus"></i>FreshCart</h1>
                <button className='block sm:hidden'><i className="fa-solid fa-bars"></i></button>
                <div className='hidden sm:block'>
                    <ul className='flex gap-5'>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/register'}>Register</NavLink></li>
                        <li><NavLink to={'/login'}>Login</NavLink></li>
                        <li><NavLink>Products</NavLink></li>
                        <li><NavLink>Brands</NavLink></li>
                        <li><NavLink>Categories</NavLink></li>
                        <li><NavLink>Cart</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Templates;
