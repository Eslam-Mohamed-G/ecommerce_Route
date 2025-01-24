import React, { useEffect, useState } from 'react';
import Google_logo from '../../assets/Google_logo.webp'
import style from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { useContext } from 'react';
import { dataContext } from '../Context/Context';

function Login() {
    const [messageFromBackEnd, setMessageFromBackEnd] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { userLogin, setUserLogin } = useContext(dataContext);
    const navigate = useNavigate();
    const togglePasswordVisibility = ()=>{
        setShowPassword(!showPassword);
    };

    let validator = Yup.object().shape({
        email : Yup.string().required('email is required').email('invalid email'),
        password : Yup.string().required('password is required').matches(/[a-z0-9]{6}$/, 'invalid password')
    });
    let formik = useFormik({
        initialValues:{
            email : '',
            password : ''
        },

        validationSchema:validator,

        onSubmit: (values)=>{
            setIsLoading(true);
            axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
                .then( (response) => {
                    setIsLoading(false);
                    if(response.data.message === 'success') {
                        localStorage.setItem('userToken', JSON.stringify(response?.data));
                        // setUserLogin( response?.data );
                        console.log( response?.data);
                        navigate('/')
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
                        <div><h1 className="text-2xl text-blue-500 font-semibold">Login to your account</h1></div>
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={formik.handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
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
                                        className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 ${formik.touched.email ? formik.errors.email ? falseMessage : trueMessage : inputGray}`}
                                        placeholder="Email address" 
                                    />
                                    <label 
                                        htmlFor="email"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email
                                        Address
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

                                {/* password   password   password */}
                                <div className="relative">
                                    <input 
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete="off" 
                                        id="password" 
                                        name="password" 
                                        type={showPassword ? 'text' : "password"} 
                                        className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 ${formik.touched.password ? formik.errors.password ? falseMessage : trueMessage : inputGray}`} 
                                        placeholder="Password" 
                                    />
                                    <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                    {formik.errors.password && formik.touched.password ?
                                        <>
                                            <i className="absolute top-1/3 end-7 text-red-600 fa-solid fa-xmark"></i>
                                            <p className='absolute -bottom-5 text-red-600 text-[12px]'>{formik.errors.password}</p>
                                        </>
                                        :
                                        <i className={`${formik.touched.password ? formik.errors.password ? 'hidden' : '' : 'hidden'} absolute top-1/3 end-7 text-green-500 fa-solid fa-check`}></i>
                                    }
                                    <div className='absolute top-2 end-0 cursor-pointer' onClick={togglePasswordVisibility}>
                                        {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i> }
                                    </div>
                                </div>

                                {/* Forgot password */}
                                <div className="relative">
                                    <div className="text-right mt-2">
                                        <Link to={''} className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</Link>
                                    </div>
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;