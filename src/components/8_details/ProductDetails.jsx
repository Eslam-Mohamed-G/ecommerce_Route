import React, { useCallback, useEffect, useState } from 'react';
import { dataContext } from '../Context/Context';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';

function ProductDetails() {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [errorMSG, setErrorMSG] = useState('');
    const [details, setDetails] = useState([]);
    const fetchProductsDetails = useCallback( async () => { 
        setLoading(true);
        setErrorMSG('');
        try {
            const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
            setDetails(response?.data?.data);
            setLoading(false);
        } catch (error) {
            setErrorMSG(error.message);
        } finally{
            setLoading(false);
        }
    });
    const { addToCart } = useContext(dataContext);

    useEffect(() => {
        if(id){
            fetchProductsDetails(); 
        }
    }, [id]);

    return (
        <div className='container mx-auto px-4 sm:px-12 py-8'>
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
            
            {!loading && !errorMSG && (
                <>
                    <div className='row flex flex-wrap gap-5 justify-center sm:justify-start'>
                        <div className='card w-full sm:w-fit max-w-sm overflow-hidden p-6 pt-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                            <figure className='w-56 h-56 mx-auto mb-6 rounded-t-lg overflow-hidden'>
                                <img src={details?.imageCover} alt="product-image" className='w-56 h-56 object-cover' />
                            </figure>
                            <div className='flex flex-wrap justify-between mt-4 md:mt-6'>
                                <button onClick={() => addToCart(details._id)} className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>add to cart</button>
                                <button><span className='text-[24px]'><i className="fa-solid fa-heart"></i></span></button>
                            </div>
                        </div>
                        <div className='card p-6'>
                            <h1 className='text-lg font-bold'>{details?.title}</h1>
                            <div className="flex items-center gap-10 mt-2.5 mb-5">
                                <h2 className='flex gap-4'> <p className={`relative ${details?.priceAfterDiscount ? 'after:w-full after:h-[2px] after:bg-red-400 after:absolute after:start-0 after:top-1/2' : ''}`}>{details?.price} EGP</p> <p>{details?.priceAfterDiscount ? `${details?.priceAfterDiscount} EGP` : ""}</p></h2>
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    <div className="text-yellow-400">★★★★</div>
                                    <div className="text-gray-300">★</div>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{details.ratingsAverage}</span>
                                </div>
                            </div>
                            <p>{details?.description}</p>
                            <div className='flex gap-4 mt-4'>
                                <p className='flex flex-col'><span className='inline-block'>Brand:</span> <span className='border rounded px-2 py-1'>{details?.brand?.name}</span></p>
                                <p className='flex flex-col'><span className='inline-block'>Category:</span><span className='border rounded px-2 py-1'>{details?.category?.name}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-4 mt-8'>
                        {details?.images?.map((img, index) => (
                            <img src={img} alt="img" key={index} className='w-28 h-28 mb-3 block mx-auto sm:mx-0' />
                        ))}
                    </div>
                </>)
            }
        </div>
    )
}

export default ProductDetails;
