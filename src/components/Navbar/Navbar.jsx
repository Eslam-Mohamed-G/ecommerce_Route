import React, { useEffect, useState, useContext } from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { dataContext } from '../Context/Context';

function Navbar() {
    const [isScroll, setIsScroll] = useState(false);
    const [isToggle, setIsToggle] = useState(false);
    const [header, setIsHeader] = useState('Home');
    const handleMenu = () => {
        setIsToggle(!isToggle);
    };

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

    const { count , userLogin } = useContext(dataContext);

    return (
        <div className={`navbar w-full backdrop-blur-sm fixed top-0 transition-all ease-in-out duration-500 z-50`}>
            <div className="w-full bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform">
                <div className='container mx-auto px-8 sm:px-12 py-2 flex justify-between'>
                    <h1 className='block text-lg font-bold'><span className='flex gap-1 items-center'><i className="fa-solid fa-cart-plus"></i>FreshCart</span></h1>
                    <h1>{userLogin?.user?.name}</h1>
                    <ul className={`flex gap-5 ${userLogin?.token ? 'hidden' : 'block'}`}>
                        <li><NavLink to={'/register'}>Register</NavLink></li>
                        <li><NavLink to={'/login'}>Login</NavLink></li>
                    </ul>
                    <button className={`${userLogin?.token ? 'block' : 'hidden'}`}>LogOut</button>
                </div>
            </div>
            <div className={`bg-slate-400/30 flex justify-between align-middle ${isScroll ? 'py-3' : 'py-5'}`}>
                <div className='container mx-auto px-9 sm:px-12 flex flex-col'>
                    <div className='flex justify-between sm:hidden'>
                        <h1>{header}</h1>
                        <button className='w-fit' onClick={handleMenu}><i className="fa-solid fa-bars"></i></button>
                    </div>
                    <div className={`w-full transition-all ease-in-out duration-500 overflow-hidden ${isToggle ? 'h-56 pt-5 sm:h-full sm:pt-0' : 'h-0 sm:h-full'}`}>
                        <ul className='flex flex-col sm:flex-row gap-5'>
                            <li><NavLink to={'/'} onClick={() => { handleMenu(); setIsHeader("Home") }}>Home</NavLink></li>
                            <li><NavLink onClick={() => { handleMenu(); setIsHeader("Products") }}>Products</NavLink></li>
                            <li><NavLink onClick={() => { handleMenu(); setIsHeader("Brands") }}>Brands</NavLink></li>
                            <li><NavLink onClick={() => { handleMenu(); setIsHeader("Categories") }}>Categories</NavLink></li>
                            <li><NavLink onClick={() => { handleMenu(); setIsHeader("Cart") }}>Cart{count}</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
