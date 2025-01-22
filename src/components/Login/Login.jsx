import React, { useEffect, useState } from 'react';
import Google_logo from '../../assets/Google_logo.webp'
import style from './Login.module.css';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

function Login() {
    const [state, setstate] = useState();
    let validator = Yup.object().shape({
        email : Yup.string().required('email is required').email('invalid email'),
        password : Yup.string().required('password is required').matches(/[a-z0-9]{6}$/, 'invalid password')
    });
    let formik = useFormik({
        initialValues:{
            email : '',
            password : ''
        },
        onSubmit: (values)=>{
            axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
                .then( (response) => {
                    if(response.data.message = 'success') {
                        localStorage.setItem('userToken', resp?.data?.token);
                    };
                })
                .catch((error) => { 
                    setIsLoading(false); setMessageFromBackEnd(error?.response?.data?.message) 
                });
        }
    })
    useEffect(() => {

        return () => {

        };
    }, []);

    return ( 
        <div className="w-full py-4 sm:py-6 md:py-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="relative py-3 max-w-lg sm:max-w-xl sm:mx-auto">
                {/* blue div */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
                
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-xl mx-auto">
                        <div><h1 className="text-2xl text-blue-500 font-semibold">Login to your account</h1></div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                {/* email   email   email */}
                                <div className="relative">
                                    <input 
                                        autoComplete="off" 
                                        id="email" 
                                        name="email" 
                                        type="email"
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="Email address" 
                                    />
                                    <label 
                                        htmlFor="email"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email
                                        Address
                                    </label>
                                </div>

                                {/* password   password   password */}
                                <div className="relative">
                                    <input 
                                        autoComplete="off" 
                                        id="password" 
                                        name="password" 
                                        type="password" 
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                                        placeholder="Password" 
                                    />
                                    <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                    <div className='absolute top-2 end-0'>
                                        <i className="fa-regular fa-eye"></i>
                                        <i className="fa-regular fa-eye-slash"></i>
                                    </div>
                                </div>

                                {/* Forgot password */}
                                <div className="relative">
                                    <div className="text-right mt-2">
                                        <Link to={''} className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</Link>
                                    </div>
                                </div>

                                <div className="relative">
                                    <button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                                </div>

                                {/* Login with Google */}
                                <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                                    <div className="flex items-center justify-center">
                                        <img src={Google_logo} alt="Google_logo" className='w-7'/>
                                        <span className="ml-2">Login with Google</span>
                                    </div>
                                </button>

                                <p className="mt-8 text-center">Need an account? 
                                    <Link to={'/register'} className="text-blue-500 hover:text-blue-700 font-semibold">Create an account</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;