import React, { createContext, useEffect, useState } from 'react';
import style from './Context.module.css';
import axios from 'axios';
import toast from 'react-hot-toast';

export const dataContext = createContext();

function StoreContextProvider({ children }) {

    const [count, setCount] = useState(0);
    const [userLogin, setUserLogin] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('userToken');

        return () => {
            setUserLogin(token ? JSON.parse(token) : [])
        };
    }, []);

    // for add to cart in 5_Cart component
    const storedUser = localStorage.getItem('userToken');
    const user = storedUser ? JSON.parse(storedUser) : null;
    // console.log(user);
    const [productToCart, setSendProductToCart] = useState([]);
    const [numOfCartItems, setNumOfCartItems] = useState(0);

    // const addToCart = async ( product_Id ) => {
    //     if (!product_Id) {
    //         console.error("No product selected");
    //         return;
    //     };

    //     if (!user?.token) {
    //         console.error("User is not logged in");
    //         toast.error("You are not logged in")
    //         return;
    //     }
    //     try {
    //         const response = await axios.post(
    //             'https://ecommerce.routemisr.com/api/v1/cart',
    //             { productId: product_Id },
    //             { headers: {token: user.token} }
    //         );
    //         getCartItems()
    //         return response;
    //         // console.log(response.data);
    //         // console.log(response.data.cartId);
    //         // console.log(response.data.numOfCartItems);
    //         // console.log(response.data.data.totalCartPrice);
    //         // console.log(response.data.data.products);
    //         // toast.success(response.data.message);
    //     } catch (error) {
    //         console.error('add to cart:', error);
    //         if (error.response?.status === 401) {
    //             localStorage.removeItem('userToken');
    //             window.location.href = '/login';
    //         }
    //     };
    // };
    // for add to cart in 5_Cart component
    
    function addToCart (product_Id) {
        if (!product_Id) {
            console.error("No product selected");
            return;
        };

        if (!user?.token) {
            console.error("User is not logged in");
            toast.error("You are not logged in")
            return;
        }
        
        return axios
                .post(
                    'https://ecommerce.routemisr.com/api/v1/cart',
                    { productId: product_Id },
                    { headers: {token: user.token} }
                ).then((response)=>{
                    const newNumOfCartItems = response.data.numOfCartItems;
                    setNumOfCartItems(newNumOfCartItems);
                    if (newNumOfCartItems > numOfCartItems) {
                        toast.success('added successfully');
                        getCartItems();
                    } else {
                        toast.error("already exists");
                    }
        
                    // console.log(response.data);
                    return response;
                }).catch((error)=>{console.error('add cart:', error);});
    }
    const getCartItems = async ()=>{
        try {
            const response = await axios.get('https://ecommerce.routemisr.com/api/v1/cart',{ headers: {token: user.token} })
            setSendProductToCart(response.data.data)
        } catch (error) {
            console.error('get cart items:' , error);
        }
    };
    useEffect(()=>{
        if(user?.token){
            getCartItems();
        }
    },[user?.token])
    return (
        <dataContext.Provider value={{ count, setCount, userLogin, setUserLogin, addToCart, productToCart }}>
            {children}
        </dataContext.Provider>
    )
}

export default StoreContextProvider;