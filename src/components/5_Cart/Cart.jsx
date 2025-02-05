import React, { useEffect, useState } from 'react';
import style from './Cart.module.css';
import { useContext } from 'react';
import { dataContext } from '../Context/Context';
import AOS from 'aos';

function Cart() {
    const { productToCart, UpdateCartItem, deleteCartItem } = useContext(dataContext);
    AOS.init({once: false,});
    // console.log(productToCart);

    return (
        <div className="container mx-auto px-3 sm:px-8">
            <h1 className="text-2xl capitalize font-bold mb-4 lg:px-36 flex justify-between"><span data-aos="fade-right">your cart</span> <span data-aos="fade-left" className='bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent'>total price: {productToCart.totalCartPrice}</span></h1>

            {productToCart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="relative lg:px-36">
                    {productToCart?.products?.map((product, index) => (
                        <div data-aos="fade-up" key={index} className="flex flex-col justify-between items-center mb-3 p-1 sm:p-4 border overflow-x-auto shadow-md rounded-lg">

                            <div className="flex justify-between items-center p-1 w-full">
                                <p>{product.product.title.split(' ').slice(0, 3).join(' ')}</p>
                                <button onClick={()=>{deleteCartItem(product.product._id)}} className='bg-red-600 text-red-50 py-1 px-2 rounded-lg shadow-md'>remove</button>
                            </div>

                            <div className="flex justify-between items-center p-1 w-full">
                                <div className=''>
                                    <img src={product.product.imageCover} className="w-24 md:w-32 max-w-full max-h-full" alt={product.product.title} />
                                </div>
                                <div className='flex flex-col sm:flex-row flex-grow h-28 justify-between'>
                                    <div className='flex items-center justify-between px-2'>
                                        <p>{product?.price}$</p>
                                        <p>total</p>
                                    </div>
                                    <div className="flex gap-2 items-center justify-center">
                                        <button onClick={()=>{UpdateCartItem(product.product._id, product.count-1);}} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <div>
                                            <input type="number" className="bg-gray-50 w-16 sm:w-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={product.count} disabled />
                                        </div>
                                        <button onClick={()=>{UpdateCartItem(product.product._id, product.count + 1)}} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;
