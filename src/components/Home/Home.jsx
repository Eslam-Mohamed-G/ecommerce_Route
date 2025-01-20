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
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'>
                    {products?.map((element)=>(
                        <div className='product card' key={element._id}>
                            <img src={element.images[0]} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Templates;
