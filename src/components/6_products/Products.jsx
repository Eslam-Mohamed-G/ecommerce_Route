import React, { useContext, useEffect } from 'react'
import { dataContext } from '../Context/Context';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';

function Products() {
    const { products, addToCart, getAllProducts, getUserWishlist, loading, errorMSG } = useContext(dataContext);
    const navigate = useNavigate();
    AOS.init({once: false,});
    const storedUser = localStorage.getItem('userToken');
    const user = storedUser ? JSON.parse(storedUser) : null;
    useEffect(() => {
        getAllProducts()
        if(user?.token){
            getUserWishlist()
        }
    }, []);
    return (
        
        <div className='container mx-auto px-4 sm:px-12 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4'>
            {loading &&
                <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded-sm sm:w-96 dark:bg-gray-700">
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                    <div className="w-full">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            }
            {errorMSG && <p className='text-center capitalize text-red-500 font-sans font-bold text-[34px]'>{errorMSG}</p>}
            { !loading && !errorMSG && products?.map((product, index)=>
                <div data-aos="fade-up" key={index} className="w-full max-w-sm overflow-hidden hover:shadow-xl transition-all bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div onClick={()=>{navigate(`/${product.title.split(' ').slice(0, 3).join(" ")}/${product._id}`)}}>
                        <img className="rounded-t-lg w-full h-48 sm:h-60 mx-auto object-cover" src={product.imageCover} alt="product image" />
                    </div>
                    <div className="px-5 pb-5">
                        <div onClick={()=>{navigate(`/${product.title.split(' ').slice(0, 3).join(" ")}/${product._id}`)}}>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title.split(' ').slice(0, 3).join(" ")}</h5>
                        </div>
                        <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                <div className="text-yellow-400">★★★★</div>
                                <div className="text-gray-300">★</div>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{product.ratingsAverage}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl md:text-xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                            <button onClick={() => addToCart(product._id)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Products;
