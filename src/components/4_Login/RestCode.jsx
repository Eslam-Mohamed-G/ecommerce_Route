import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

function RestCode() {
    const [messageFromBackEnd, setMessageFromBackEnd] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const validCode = Yup.object({
        resetCode: Yup.string()
            .required('Code is required')
            .matches(/^[0-9]+$/, 'Invalid code'),
    });
    let formikCode = useFormik({
        initialValues: {
            resetCode: ''
        },
        validationSchema: validCode,
        onSubmit: (value) => {
            console.log("Submitting values:", value);
            setIsLoading(true);
            axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, value)
                .then((response) => {
                    setIsLoading(false);
                    console.log(response);
                    if (response.data.status === 'Success') {
                        navigate('/restpassword');
                    };
                })
                .catch((error) => {
                    setIsLoading(false); setMessageFromBackEnd(error?.response?.data?.message)
                });
        }
    });

    const inputGray = "border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 min-w-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    const trueMessage = "border-green-500 text-green-500 appearance-none dark:text-green-400 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-green-500";
    const falseMessage = "border-red-500 text-red-500 appearance-none text-sm focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 dark:text-red-500 dark:border-red-500";
    return (
        <div className="w-full py-4 sm:py-6 md:py-8">
            <div className="relative w-full sm:w-3/4 m-auto py-10 px-4 bg-white shadow-lg sm:rounded-3xl sm:p-20 dark:bg-gray-800">
                <div className="divide-y divide-gray-200">
                    <form onSubmit={formikCode.handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <h1 className="text-2xl text-blue-500 font-semibold">please enter Verify Reset Code </h1>
                        <div className="relative">
                            <input
                                value={formikCode.values.resetCode}
                                onChange={formikCode.handleChange}
                                onBlur={formikCode.handleBlur}
                                id="resetCode"
                                name="resetCode"
                                type="text"
                                className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 dark:bg-transparent dark:text-white ${formikCode.touched.resetCode ? formikCode.errors.resetCode ? falseMessage : trueMessage : inputGray}`}
                                placeholder=""
                            />
                            <label htmlFor="code" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">code</label>
                            {formikCode.errors.resetCode && formikCode.touched.resetCode ?
                                <>
                                    <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                                    <p className='absolute -bottom-5 text-red-600 text-[12px]'>{formikCode.errors.resetCode}</p>
                                </>
                                :
                                <i className={`${formikCode.touched.resetCode ? formikCode.errors.resetCode ? 'hidden' : '' : 'hidden'} absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
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

                        <p className="mt-8 text-center">Need an account?
                            <Link to={'/register'} className="text-blue-500 hover:text-blue-700 font-semibold">Create an account</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RestCode;