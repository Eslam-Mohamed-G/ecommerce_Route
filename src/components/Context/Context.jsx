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

    useEffect(() => {
        if (user?.token) {
            const storedCart = localStorage.getItem(`cart_${user.token}`);
            if (storedCart) {
                setSendProductToCart(JSON.parse(storedCart));
            } else {
                setSendProductToCart([]); 
            }
        }
    }, [user?.token]);

    const addToCart = async ( product_Id ) => {
        if (!product_Id) {
            console.error("No product selected");
            return;
        };

        if (!user?.token) {
            console.error("User is not logged in");
            toast.error("You are not logged in")
            return;
        }
        try {
            const response = await axios.post(
                'https://ecommerce.routemisr.com/api/v1/cart',
                { productId: product_Id },
                { headers: {token: user.token} }
            );
            console.log(response.data);
            console.log(response.data.cartId);
            // console.log(response.data.numOfCartItems);
            // console.log(response.data.data.totalCartPrice);
            // console.log(response.data.data.products);
            // toast.success(response.data.message);
            const addedProduct = response.data.data.products.find(
                (product) => product.product === product_Id
            );
            setSendProductToCart((prevCart) => {
                const isExist = prevCart.some((item) => item?.product === product_Id);

                if (!isExist) {
                    const updatedCart = [...prevCart, addedProduct];
                    localStorage.setItem(`cart_${user.token}`, JSON.stringify(updatedCart));
                    toast.success(response.data.message);
                    
                    return updatedCart;
                }else{
                    toast.error("already exist")
                }
                return prevCart;
            });
        } catch (error) {
            console.error('add to cart:', error);
            if (error.response?.status === 401) {
                localStorage.removeItem('userToken');
                window.location.href = '/login';
            }
        };
    };
    // for add to cart in 5_Cart component
    return (
        <dataContext.Provider value={{ count, setCount, userLogin, setUserLogin, addToCart, productToCart }}>
            {children}
        </dataContext.Provider>
    )
}

export default StoreContextProvider;