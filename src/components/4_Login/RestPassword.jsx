import React, { useEffect, useState } from 'react';
import Google_logo from '../../assets/Google_logo.webp'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

function RestPassword() {
    const [messageFromBackEnd, setMessageFromBackEnd] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    let validator = Yup.object().shape({
        email: Yup.string().required('email is required').email('invalid email'),
        newPassword: Yup.string().required('password is required').matches(/[a-z0-9]{6}$/, 'invalid password')
    });
    let formik = useFormik({
        initialValues: {
            email: '',
            newPassword: ''
        },

        validationSchema: validator,

        onSubmit: (values) => {
            setIsLoading(true);
            axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`, values)
                .then((response) => {
                    setIsLoading(false);
                    if (response?.data?.token) {
                        navigate('/login')
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
            <div className="relative py-3 max-w-lg sm:max-w-xl sm:mx-auto">
                {/* blue div */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />

                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 dark:bg-gray-700">
                    <div className="max-w-xl mx-auto">
                        <h1 className="text-2xl text-blue-500 font-semibold capitalize">reset your account password</h1>
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={formik.handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 dark:text-white sm:text-lg sm:leading-7">
                                {/* email   email   email */}
                                <div className="relative mb-8">
                                    <input
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="off"
                                        id="email"
                                        name="email"
                                        type="email"
                                        className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 ${formik.touched.email ? formik.errors.email ? falseMessage : trueMessage : inputGray}`}
                                        placeholder=""
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-0 -top-3.5 text-gray-600 dark:text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:dark:text-white peer-focus:text-sm"
                                    >
                                        Email Address
                                    </label>

                                    {formik.errors.email && formik.touched.email ?
                                        <>
                                            <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                                            <p className='absolute -bottom-5 text-red-600 text-[12px]'>{formik.errors.email}</p>
                                        </>
                                        :
                                        <i className={`${formik.touched.email ? formik.errors.email ? 'hidden' : '' : 'hidden'} absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
                                    }
                                </div>

                                {/* newPassword   newPassword   newPassword */}
                                <div className="relative">
                                    <input
                                        value={formik.values.newPassword}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="off"
                                        id="newPassword"
                                        name="newPassword"
                                        type={showPassword ? 'text' : "password"}
                                        className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 ${formik.touched.newPassword ? formik.errors.newPassword ? falseMessage : trueMessage : inputGray}`}
                                        placeholder=""
                                    />
                                    <label htmlFor="newPassword" className="absolute left-0 -top-3.5 text-gray-600 dark:text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:dark:text-white peer-focus:text-sm">New Password</label>
                                    {formik.errors.newPassword && formik.touched.newPassword ?
                                        <>
                                            <i className="absolute top-1/3 end-7 text-red-600 fa-solid fa-xmark"></i>
                                            <p className='absolute -bottom-5 text-red-600 text-[12px]'>{formik.errors.newPassword}</p>
                                        </>
                                        :
                                        <i className={`${formik.touched.newPassword ? formik.errors.newPassword ? 'hidden' : '' : 'hidden'} absolute top-1/3 end-7 text-green-500 fa-solid fa-check`}></i>
                                    }
                                    <div className='absolute top-2 end-0 cursor-pointer dark:text-white' onClick={togglePasswordVisibility}>
                                        {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                                    </div>
                                </div>

                                <div className="relative">
                                    <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                                        {isLoading ? <>Submiting... <i className='fas fa-spinner fa-spin'></i></> : 'Rest Password'}
                                    </button>
                                </div>

                                <div className={`relative z-0 w-full mb-6 group text-center ${messageFromBackEnd ? '' : 'hidden'}`}>
                                    {messageFromBackEnd ? <p className='text-red-500'>{messageFromBackEnd}</p> : <p className='text-green-500'>succeed </p>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestPassword;