import React, { useEffect, useState, useContext } from 'react';
import style from './Home.module.css';
import axios from "axios";
import Slider from 'react-slick';
import { dataContext } from '../Context/Context';
import FadeSlider from './FadeSlider';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
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
            AOS.init({once: false,});
        };
    }, []);
    const { count, setCount, addToCart } = useContext(dataContext);

    return (
        <div className='text-black'>
            <div className='mb-4 border-b shadow-md'>
                <FadeSlider/>
            </div>
            <div data-aos="fade-up" className='container px-4 mx-auto'>
                <Slick/>
            </div>
            <div className="container mx-auto px-4 sm:px-8">
                <button onClick={()=>{setCount(count+1)}}>counter</button>
                {products ? <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6'>
                    {products?.map((element) => (
                        <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all" key={element._id}>
                            <div className="relative overflow-hidden">
                                <img src={element.imageCover} alt="Product" className="w-full object-contain" />
                                {/* <img src={element.images[0]} alt="Product" className="w-full object-contain" /> */}
                                <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Sale
                                </span>
                            </div>
                            <div className="p-5 space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{element.title.split(' ').slice(0, 2).join()}</h3>
                                    <p className="text-gray-500 mt-1">{element.description.substring(0, 40)}...</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="space-y-1">
                                        <p className="text-2xl font-bold text-gray-900">${element.price}</p>
                                        <p className="text-sm text-gray-500 line-through">$69.99</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="text-yellow-400">★★★★</div>
                                        <div className="text-gray-300">★</div>
                                        <span className="text-sm text-gray-600 ml-1">({element.ratingsAverage})</span>
                                    </div>
                                </div>
                                <button onClick={() => addToCart(element._id)} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div> : <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500" />
                </span>
                }
            </div>
        </div>
    )
}

export default Home;

function Slick() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        easing: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [categories, setCategories] = useState([]);
    async function getAllCategories() {
        try {
            const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
            setCategories(data.data);
            // console.log(data?.data);
        } catch (error) {
            console.error('get All Categories', error);
        }
    }

    useEffect(() => {
        getAllCategories()
    }, []);
    return (
        <div className="slider-container">
            <h1 className='ps-2 pb-2'>shop Popular Categories</h1>
            <Slider {...settings}>
                {categories?.map((element) => (
                    <div key={element._id} className='w-16 h-64 px-2'>
                        <div className='border border-blue-500 rounded overflow-hidden flex flex-col'>
                            <div className='relative'>
                                <img src={element.image} alt={element.name} className='block w-full h-36 sm:h-48 object-cover' />
                            </div>
                            <div className='bg-blue-100 grow'>
                                <h4 className='text-center'>{element.name}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
