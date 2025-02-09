import React, { useContext } from 'react';
import { dataContext } from '../Context/Context';

function ProductDetails() {
    const { details, loading } = useContext(dataContext);

    if (loading) {
        return (
            <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500" />
            </span>
        );
    }
    return (
        <div className='container mx-auto px-4 sm:px-12'>
            <h1>details</h1>
            {loading ?
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500" />
                </span>
                :
                <div className='card'>
                    <h1>{details.title}</h1>
                    <h1>{details.price}</h1>
                    <img src={details.imageCover} alt="product-image" />
                    {details?.images?.map((img, index) => (
                        <img src={img} alt="img" key={index} />
                    ))}
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">{details.ratingsAverage}</span>
                    {/* <h1>{details.ratingsAverage}</h1> */}
                </div>
            }
        </div>
    )
}

export default ProductDetails;
