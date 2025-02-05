import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

function Payment() {
    const [isLoading, setIsLoading] = useState(false);
    const [messageFromBackEnd, setMessageFromBackEnd] = useState('');
    function cashOrder(val){

    };
    let validator = Yup.object().shape({
        details: Yup.string().required('Details is required'),
        phone: Yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/, 'invalid phone'),
        city: Yup.string().required('city is required'),
    });

    const formik = useFormik({
        initialValues: {
            details: '',
            phone: '',
            city: ''
        },
        validationSchema: validator,
        onSubmit: cashOrder
    });

    const inputGray = "border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 min-w-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    const trueMessage = "border-green-500 text-green-500 appearance-none dark:text-green-400 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-green-500";
    const falseMessage = "border-red-500 text-red-500 appearance-none text-sm focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 dark:text-red-500 dark:border-red-500";

    return (
        <div className="w-full py-4 sm:py-6 md:py-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="relative py-3 max-w-lg sm:max-w-xl sm:mx-auto">
                {/* blue div */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />

                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-xl mx-auto">
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={formik.handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                {/* details */}
                                <div className="relative z-0 w-full mb-6 group">
                                    <input
                                        type="text"
                                        value={formik.values.details}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="details"
                                        id="details"
                                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none ${formik.touched.name ? formik.errors.name ? falseMessage : trueMessage : inputGray} peer`}
                                        placeholder=" "
                                    />
                                    <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">details</label>
                                    {formik.errors.name && formik.touched.name ?
                                        <>
                                            <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                                            <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.name}</p>
                                        </>
                                        :
                                        <i className={`${formik.touched.name ? formik.errors.name ? 'hidden' : '' : 'hidden'} absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
                                    }
                                </div>

                                {/* city */}
                                <div className="relative z-0 w-full mb-6 group">
                                    <input
                                        type="text"
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="city"
                                        id="city"
                                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none ${formik.touched.name ? formik.errors.name ? falseMessage : trueMessage : inputGray} peer`}
                                        placeholder=" "
                                    />
                                    <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                                    {formik.errors.name && formik.touched.name ?
                                        <>
                                            <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                                            <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.name}</p>
                                        </>
                                        :
                                        <i className={`${formik.touched.name ? formik.errors.name ? 'hidden' : '' : 'hidden'} absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
                                    }
                                </div>

                                {/* phone   phone   phone */}
                                <div className="relative z-0 w-full mb-6 group">
                                    <input
                                        type="phone"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="phone"
                                        id="phone"
                                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none ${formik.touched.phone ? formik.errors.phone ? falseMessage : trueMessage : inputGray} peer`}
                                        placeholder=" "
                                    />
                                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
                                    {formik.errors.phone && formik.touched.phone ?
                                        <>
                                            <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                                            <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.phone}</p>
                                        </>
                                        :
                                        <i className={`${formik.touched.phone ? formik.errors.phone ? 'hidden' : '' : 'hidden'} absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
                                    }
                                </div>

                                <div className="relative">
                                    <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                                        {isLoading ? <>Submiting... <i className='fas fa-spinner fa-spin'></i></> : 'Submit'}
                                    </button>
                                </div>

                                <div className={`relative z-0 w-full mb-6 group text-center ${messageFromBackEnd ? '' : 'hidden'}`}>
                                    {messageFromBackEnd ? <p className='text-red-500'>{messageFromBackEnd}</p> : <p className='text-green-500'>succeed
                                    </p>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
