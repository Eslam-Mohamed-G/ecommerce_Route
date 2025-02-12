import React, { useEffect, useContext } from 'react';
import { dataContext } from '../Context/Context';
import Loading from '../loading/Loading';

function Brands() {
    const { getBrands, brands, loading, errorMSG } = useContext(dataContext);
    useEffect(() => {
        getBrands()
    }, []);
    return (
        <div className='container mx-auto px-2 sm:px-12 pt-4'>
            {loading && <Loading />}
            {errorMSG && <p className='text-center capitalize text-red-500 font-sans font-bold text-[34px]'>{errorMSG}</p>}
            {!loading && !errorMSG && (
                <div className='flex flex-row flex-wrap w-full'>
                    {brands?.map((brand, index) => (
                        <div className="w-1/2 sm:w-1/4 p-2" key={index}>
                            <div className='w-full max-w-sm m-auto text-center py-6 overflow-hidden hover:shadow-xl transition-all bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                                <img src={brand.image} alt="img" className='w-full m-auto' />
                                <p className=''>{brand.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Brands