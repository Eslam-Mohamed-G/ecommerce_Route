import React, { useEffect, useState } from 'react';
import style from './Register.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'

function Register() {
    const [isValid, setIsValid] = useState();
    let validator = Yup.object().shape({
        name : Yup.string().required('Name is required').min(3, 'min 3 letters'),
        email : Yup.string().required('email is required').email('invalid email'),
        password : Yup.string().required('password is required').matches(/[a-z0-9]{3}$/, 'invalid password'),
        rePassword : Yup.string().required('rePassword is required').oneOf([Yup.ref('password')], 'invalid rePassword'),
        phone : Yup.string().required('phone is required').matches(/^01[0125][0-p]{8}$/, 'invalid phone')
    });

    let formik =  useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            rePassword:'',
            phone:'',
        },
        validationSchema : validator,
        onSubmit:(values)=>{
            console.log(values);
        }
    });
    
    useEffect(() => {
        
        return () => {
            
        };
    }, []);

    const trueMessage = "border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600";
    const falseMessage = "text-red-600 border-red-300 appearance-none dark:text-white dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600";

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-6 group">
                    <input 
                        type="text" 
                        value={formik.values.name} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                        name="name" 
                        id="name" 
                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${ formik.touched.name ? formik.errors.name ? falseMessage : trueMessage : trueMessage} peer`} 
                        placeholder=" " 
                    />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    {formik.errors.name && formik.touched.name ?
                        <>
                            <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                            <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.name}</p>
                        </>
                        : 
                        <i className={`${formik.touched.name ? formik.errors.name ? 'hidden' : '' : 'hidden' } absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
                    }
                </div>
                {/* email   email   email */}
                <div className="relative z-0 w-full mb-6 group">
                    <input 
                        type="email" 
                        value={formik.values.email} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="email" 
                        id="email" 
                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${ formik.touched.email ? formik.errors.email ? falseMessage : trueMessage : trueMessage} peer`} 
                        placeholder=" " 
                    />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    {formik.errors.email && formik.touched.email ?
                        <>
                            <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                            <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.email}</p>
                        </>
                        : 
                        <i className={`${formik.touched.email ? formik.errors.email ? 'hidden' : '' : 'hidden' } absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
                    }
                </div>

                {/* password   password   password */}
                <div className="relative z-0 w-full mb-6 group">
                    <input 
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="password" 
                        id="password" 
                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${ formik.touched.password ? formik.errors.password ? falseMessage : trueMessage : trueMessage} peer`} 
                        placeholder=" " 
                    />
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    {formik.errors.password && formik.touched.password ?
                        <>
                            <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                            <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.password}</p>
                        </>
                        : 
                        <i className={`${formik.touched.password ? formik.errors.password ? 'hidden' : '' : 'hidden' } absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
                    }
                </div>

                {/* rePassword   rePassword   rePassword */}
                <div className="relative z-0 w-full mb-6 group">
                    <input 
                        type="password"
                        value={formik.values.rePassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="rePassword" 
                        id="rePassword" 
                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${ formik.touched.rePassword ? formik.errors.rePassword ? falseMessage : trueMessage : trueMessage} peer`} 
                        placeholder=" " 
                    />
                    <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                    {formik.errors.rePassword && formik.touched.rePassword ?
                        <>
                            <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                            <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.rePassword}</p>
                        </>
                        : 
                        <i className={`${formik.touched.rePassword ? formik.errors.rePassword ? 'hidden' : '' : 'hidden' } absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
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
                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${ formik.touched.rePassword ? formik.errors.rePassword ? falseMessage : trueMessage : trueMessage} peer`} 
                        placeholder=" "
                    />
                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
                    {formik.errors.phone && formik.touched.phone ?
                        <>
                            <i className="absolute top-1/3 end-0 text-red-600 fa-solid fa-xmark"></i>
                            <p className='absolute top-full text-red-600 text-[12px]'>{formik.errors.phone}</p>
                        </>
                        : 
                        <i className={`${formik.touched.phone ? formik.errors.phone ? 'hidden' : '' : 'hidden' } absolute top-1/3 end-0 text-green-500 fa-solid fa-check`}></i>
                    }
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default Register;
