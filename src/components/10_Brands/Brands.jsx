import { useContext, useEffect, useState } from 'react';
import { dataContext } from '../Context/Context';
import Loading from '../loading/Loading';

function Brands() {
    const { getBrands, brands, getSpecificBrand, specificBrands, loading, errorMSG } = useContext(dataContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = (id) => {
        getSpecificBrand(id);
        setIsModalOpen(true);
    };
    useEffect(() => {
        getBrands()
    }, []);
    return (
        <div className='container mx-auto px-2 sm:px-12 pt-4'>
            {loading && <Loading />}
            {errorMSG && <p className='text-center capitalize text-red-500 font-sans font-bold text-[34px]'>{errorMSG}</p>}
            {!loading && !errorMSG && (
                <>
                    <h1 className='uppercase text-4xl text-center mb-4 bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent'>all brands</h1>
                    <div className='flex flex-row flex-wrap w-full'>
                        {brands?.map((brand, index) => (
                            <div className="w-1/2 sm:w-1/4 p-2" key={index}>
                                <div onClick={() => handleOpenModal(brand._id)} data-modal-target="small-modal" data-modal-toggle="small-modal" className='w-full max-w-sm m-auto text-center py-6 overflow-hidden hover:shadow-md hover:shadow-blue-300 transition-all bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                                    <img src={brand.image} alt="img" className='w-full m-auto' />
                                    <p className='bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent'>{brand.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* Modal */}
                    {isModalOpen && (
                        <div className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
                            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md dark:bg-gray-800">
                                {/* Modal Header */}
                                <div className="flex justify-between items-center border-b pb-2">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Brand Details
                                    </h3>
                                    <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                        ✖
                                    </button>
                                </div>

                                {/* Modal Body */}
                                <div className="text-center mt-4">
                                    <img src={specificBrands.image} alt="Brand" className="w-full m-auto rounded-lg" />
                                    <p className="mt-2 text-lg font-semibold bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">
                                        {specificBrands.name}
                                    </p>
                                </div>

                                {/* Modal Footer */}
                                <div className="flex justify-end mt-4">
                                    <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </>
            )}
        </div>
    )
}

export default Brands;