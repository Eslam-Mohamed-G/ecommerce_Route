import React, { useEffect, useState } from 'react';
import style from './Home.module.css';
import axios from "axios";

function Templates() {
    const [products, setProducts] = useState(null);
    async function getAllProducts (){
        try {
            const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
            setProducts(data.data)
            console.log(data.data);
        } catch (error) {
            console.error('error all products', error);
        }
    }
    useEffect(() => {
        getAllProducts()
        return () => {
            
        };
    }, []);

    return (
        <div className='text-black'>
            <h1>home</h1>
        </div>
    )
}

export default Templates;
