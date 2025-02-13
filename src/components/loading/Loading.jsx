import React from 'react';

function Loading() {
    return (
        <div className='container mx-auto px-4 sm:px-12 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4'>
            {Array.from({ length: 10 }, (_, i) => (
                <div role="status" key={i} className="flex flex-col gap-4 w-full max-w-sm border border-gray-200 p-4 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded-t-lg dark:bg-gray-700">
                        <svg className="w-40 h-40 m-auto text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                    <div className="w-full">
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            ))}
        </div>
    )
}

export default Loading;