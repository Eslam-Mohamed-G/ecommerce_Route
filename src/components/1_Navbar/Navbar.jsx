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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const { count, userLogin, setUserLogin, productToCart } = useContext(dataContext);
    const handleLogout = () => {
        localStorage.removeItem('userToken');
        setUserLogin(null)
    }

    return (
        <div className={`navbar w-full backdrop-blur-sm fixed top-0 transition-all ease-in-out duration-500 z-50`}>
            <div className="w-full bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform">
                <div className='container mx-auto px-8 sm:px-12 py-2 flex justify-between'>
                    <h1 className='block text-lg font-bold'><span className='flex gap-1 items-center'><i className="fa-solid fa-cart-plus"></i>FreshCart</span></h1>
                    <h1>{userLogin?.user?.name}</h1>
                    {!userLogin?.token
                        ?
                        <ul className='flex gap-5'>
                            <li><NavLink to={'/register'}>Register</NavLink></li>
                            <li><NavLink to={'/login'}><p className='border items-center align-middle'>Login <span><i className="fa-solid fa-right-to-bracket" /></span></p></NavLink></li>
                        </ul>
                        :
                        <button className='' onClick={handleLogout}>LogOut <i className="fa-solid fa-right-from-bracket"></i></button>
                    }
                </div>
            </div>
            <div className={`bg-slate-400/30 flex justify-between align-middle ${isScroll ? 'py-3' : 'py-5'}`}>
                <div className='container mx-auto px-9 sm:px-12 flex flex-col'>
                    <div className='flex justify-between sm:hidden'>
                        <h1>{header}</h1>
                        <button className='w-fit transition-all ease-in-out duration-500' onClick={handleMenu}>{isToggle ? <i className="text-[24px] fa-solid fa-xmark"></i> : <i className="text-[22px] fa-solid fa-bars"></i>}</button>
                    </div>
                    <div className={`w-full transition-all ease-in-out duration-500 overflow-hidden ${isToggle ? 'h-56 pt-5 sm:h-full sm:pt-0' : 'h-0 sm:h-full'}`}>
                        <ul className='flex flex-col sm:flex-row gap-5'>
                            <li><NavLink to={'/'} onClick={() => { handleMenu(); setIsHeader("Home") }}>Home</NavLink></li>
                            <li><NavLink onClick={() => { handleMenu(); setIsHeader("Products") }}>Products</NavLink></li>
                            <li><NavLink onClick={() => { handleMenu(); setIsHeader("Brands") }}>Brands</NavLink></li>
                            <li><NavLink onClick={() => { handleMenu(); setIsHeader("Categories") }}>Categories</NavLink></li>
                            <li><NavLink to={'/cart'} onClick={() => { handleMenu(); setIsHeader("Cart") }}>Cart{productToCart.length}</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
