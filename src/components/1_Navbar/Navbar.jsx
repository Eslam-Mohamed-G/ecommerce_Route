import React, { useEffect, useState, useContext } from 'react';
import style from './Navbar.module.css';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { dataContext } from '../Context/Context';

function Navbar() {
    const storedUser = localStorage.getItem('userToken');
    const user = storedUser ? JSON.parse(storedUser) : null;
    // console.log(user);
    const [isScroll, setIsScroll] = useState(false);
    const [isToggle, setIsToggle] = useState(false);
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


    const { productToCart, getAllProducts, getUserWishlist } = useContext(dataContext);
    const handleLogout = () => {
        localStorage.removeItem('userToken');
    }

    return (
        <div className={`navbar w-full backdrop-blur-sm fixed top-0 transition-all ease-in-out duration-500 z-50`}>
            <div className="w-full bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform">
                <div className='container mx-auto px-2 sm:px-12 py-2 flex justify-between'>
                    <Link to={'/'} className='block text-lg font-bold'><span className='flex gap-1 items-center'><i className="fa-solid fa-cart-plus"></i>FreshCart</span></Link>
                    <h1>{user?.user?.name}</h1>
                    {!user?.token
                        ?
                        <ul className='flex gap-5'>
                            <li><NavLink to={'/register'}>Register</NavLink></li>
                            <li><NavLink to={'/login'}><p className='items-center align-middle'>Login <span><i className="fa-solid fa-right-to-bracket" /></span></p></NavLink></li>
                        </ul>
                        :
                        <button className='' onClick={handleLogout}>LogOut <i className="fa-solid fa-right-from-bracket"></i></button>
                    }
                </div>
            </div>
            <div className={`bg-slate-400/30 flex justify-between align-middle ${isScroll ? 'py-3' : 'py-5'}`}>
                <div className='container mx-auto px-4 sm:px-12 flex flex-col'>
                    <div className='flex justify-between sm:hidden'>
                        <h1 className='capitalize'>Home</h1>
                        <button className='w-fit transition-all ease-in-out duration-500' onClick={handleMenu}>{isToggle ? <i className="text-[24px] fa-solid fa-xmark"></i> : <i className="text-[22px] fa-solid fa-bars"></i>}</button>
                    </div>
                    <div className={`w-full transition-all ease-in-out duration-500 overflow-hidden ${isToggle ? 'h-72 pt-5 sm:h-full sm:pt-0' : 'h-0 sm:h-full'}`}>
                        <ul className='flex flex-col sm:flex-row gap-5'>
                            <li className='flex'><NavLink to={'/'} onClick={() => { handleMenu(); }} className='w-full border-b border-blue-500 sm:border-none'>Home</NavLink></li>
                            <li className='flex'><NavLink to={'Products'} onClick={() => { handleMenu(); getAllProducts() }} className='w-full border-b border-blue-500 sm:border-none'>Products</NavLink></li>
                            <li className='flex'><NavLink onClick={() => { handleMenu(); }} className='w-full border-b border-blue-500 sm:border-none'>Brands</NavLink></li>
                            <li className='flex'><NavLink onClick={() => { handleMenu(); }} className='w-full border-b border-blue-500 sm:border-none'>Categories</NavLink></li>
                            <li className={`flex ${user?.token ? '' : 'hidden'}`}><NavLink to={`/cart`} onClick={() => { handleMenu(); }} className='w-full border-b border-blue-500 sm:border-none'>Cart{productToCart?.products?.length}</NavLink></li>
                            <li className={`flex ${user?.token ? '' : 'hidden'}`}><NavLink to={`/wishlist`} onClick={() => { handleMenu(); getUserWishlist() }} className='w-full border-b border-blue-500 sm:border-none'>Wish List</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
