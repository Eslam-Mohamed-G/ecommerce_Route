import React, { useContext } from 'react'
import { dataContext } from '../Context/Context';
import { Link } from 'react-router-dom';
import AOS from 'aos';

function Products() {
    const { products, addToCart } = useContext(dataContext);
    AOS.init({once: false,});
    return (
        <div className='container mx-auto px-4 sm:px-12 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4'>
            {products?.map((product, index)=>
                <div data-aos="fade-up" key={index} className="w-full max-w-sm overflow-hidden hover:shadow-xl transition-all bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <Link to={''}>
                        <img className="rounded-t-lg w-full h-48 sm:h-60 mx-auto object-cover" src={product.imageCover} alt="product image" />
                    </Link>
                    <div className="px-5 pb-5">
                        <Link to={''}>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title.split(' ').slice(0, 3).join(" ")}</h5>
                        </Link>
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
