import React, { useContext, useEffect } from 'react';
import { dataContext } from '../Context/Context';
import Loading from '../loading/Loading';

function Category() {
    const { getAllCategories, categories, loading, errorMSG } = useContext(dataContext);

    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-12 py-4">
            {loading && <Loading />}
            {errorMSG && <p className='text-center capitalize text-red-500 font-sans font-bold text-[34px]'>{errorMSG}</p>}
            {!loading && !errorMSG && (
                <>
                    <h1 className='ps-2 pb-2'>shop Popular Categories</h1>
                    <div className='flex flex-row flex-wrap w-full'>
                        {categories?.map((element) => (
                            <div key={element._id} className='w-1/2 sm:w-1/4 p-2 '>
                                <div className='border border-blue-500 rounded overflow-hidden flex flex-col'>
                                    <div className='relative'>
                                        <img src={element.image} alt={element.name} className='block w-full h-36 sm:h-72 object-cover' />
                                    </div>
                                    <div className='bg-blue-100 grow'>
                                        <h4 className='text-center'>{element.name}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Category;