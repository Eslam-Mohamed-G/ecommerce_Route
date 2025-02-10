import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useCallback } from 'react';

export const dataContext = createContext();

function StoreContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [errorMSG, setErrorMSG] = useState('');
    const storedUser = localStorage.getItem('userToken');
    const user = storedUser ? JSON.parse(storedUser) : null;
    // console.log(user);
    const [products, setProducts] = useState(null);
    async function getAllProducts (){
        setLoading(true);
        setErrorMSG('');
        try {
            const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
            setProducts(data.data)
            // console.log(data.data);
        } catch (error) {
            console.error('error all products', error);
            setErrorMSG(error.message);
        } finally{
            setLoading(false);
        }
    }
    
    // for add to cart in 5_Cart component
    const [productToCart, setSendProductToCart] = useState([]);
    const [numOfCartItems, setNumOfCartItems] = useState(0);
    
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
    };
    // for add to cart in 5_Cart component

    // Update cart product quantity
    async function UpdateCartItem ( product_Id, product_Count ){
        try {
            const response = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${product_Id}`,
                { count: product_Count }, { headers: { token: user.token } }
            );
            getCartItems();
            return response;
        } catch (error) {
            console.error(error);
        }; 
    };
    // Update cart product quantity

    // DELETE Remove specific cart Item
    async function deleteCartItem ( product_Id ){
        try {
            const response = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${product_Id}`,
                { headers: { token: user.token } }
            );
            getCartItems();
            return response;
        } catch (error) {
            console.error(error);
        }; 
    };
    // DELETERemove specific cart Item

    // DELETEClear user cart
    const clearAllCartItem  = async()=>{
        try {
            const response = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
                { headers: { token: user.token } }
            );
            getCartItems();
            return response;
        } catch (error) {
            console.error(error);
        }; 
    };
    // DELETEClear user cart

    const getCartItems = async ()=>{
        try {
            const response = await axios.get('https://ecommerce.routemisr.com/api/v1/cart',{ headers: {token: user.token} })
            setSendProductToCart(response.data.data)
            // console.log(response.data);
        } catch (error) {
            console.error('get cart items:' , error);
        }
    };

    // POST Add product to wishlist
    const postWishlist = useCallback( async (product_Id) => {
        if (!product_Id) {
            console.error("No product selected");
            return;
        };

        if (!user?.token) {
            toast.error("You are not logged in")
            return;
        };

        try {
            const response = await axios.post(
                'https://ecommerce.routemisr.com/api/v1/wishlist',
                { productId: product_Id },
                { headers: { token: user.token } }
            )
            console.log(response.data);
            toast.success('added to your wishlist');
        } catch (error) {
            console.error('wishlist:', error);
            toast.error("already exists");
        }
    });
    // POST Add product to wishlist

    // GET logged user wishlist
    // const [wishList, setWishList] = useState([]);
    // const getUserWishlist = useCallback( async () =>{
    //     if (!user?.token) {
    //         toast.error("You are not logged in")
    //         return;
    //     };
    //     try {
    //         const response = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',{ headers: {token: user.token} });
    //         setWishList(response.data.data);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error("get user wish:", error);
    //     }
    // });
    const [wishList, setWishList] = useState([]);
    async function getUserWishlist(){
        if (!user?.token) {
            toast.error("You are not logged in")
            return;
        };
        setLoading(true);
        setErrorMSG("");
        try {
            const response = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',{ headers: {token: user.token} });
            setWishList([...response.data.data]);
            // console.log(response.data.data);
        } catch (error) {
            console.error("get user wish:", error);
            setErrorMSG(error.message)
        } finally{
            setLoading(false);
        }
    };
    // GET logged user wishlist


    return (
        <dataContext.Provider value={{ getAllProducts, getCartItems, products, addToCart, postWishlist, getUserWishlist, wishList, productToCart, getCartItems, UpdateCartItem, deleteCartItem, clearAllCartItem, loading, errorMSG }}>
            {children}
        </dataContext.Provider>
    )
}

export default StoreContextProvider;