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
            <div className="container mx-auto px-8">
                <div className='grid grid-cols-6'>
                    {products?.map((element)=>(
                        <div className='product'>
                            <img src={element.images[0]} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Templates;
