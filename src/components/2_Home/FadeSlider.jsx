import React, { useEffect } from 'react'
import Slider from 'react-slick';
import AOS from 'aos';
import Shose from '../../assets/shose.jpeg';
import Shose2 from '../../assets/card-item1.jpg';
import Shose3 from '../../assets/card-item3.jpg';
import clothes from '../../assets/Crew,Neck.jpeg';
import clothes1 from '../../assets/clothes.jpeg';
import clothes3 from '../../assets/clothes3.jpeg';
import DualSense from '../../assets/post-item1.jpg';
import DualSense2 from '../../assets/post-item2.jpg';
import DualSense3 from '../../assets/DualSense.jpeg';

function FadeSlider() {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };
    useEffect(() => {
        
        return () => {
            AOS.init({once: false,});
        };
    }, []);
    return (
        <Slider {...settings}>
            <div className="w-full">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex grow justify-between items-center bg-[#dfdfdf]" data-aos="zoom-in">
                        <div className='ps-4 sm:ps-12'>
                            <h1>Finding Your Perfect Shoes</h1>
                            <button className='rounded py-1 px-3 mt-4 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg'>shop now</button>
                        </div>
                        <img src={Shose} className="w-40 sm:w-80 h-[200px] sm:h-[400px]" alt="clothes" />
                    </div>

                    <div className="w-[320px] hidden md:block">
                        <div className='' data-aos="fade-down">
                            <img src={Shose2} className="block w-80 h-[200px]" alt="shose" />
                        </div>

                        <div data-aos="fade-up">
                            <img src={Shose3} className="block w-80 h-[200px]" alt="shose" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 2 */}
            <div className="w-full">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex grow justify-between items-center bg-[#f0f0f0]" data-aos="zoom-in">
                        <div className='ps-4 sm:ps-12'>
                            <h1>Dress Sharp Everyday</h1>
                            <button className='rounded py-1 px-3 mt-4 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg'>shop now</button>
                            {/* <p>We have the premium set of formal wears for to make you look confident and comfortable at your job.</p> */}
                        </div>
                        <img src={clothes} className="w-40 sm:w-80 h-[200px] sm:h-[400px]" alt="clothes" />
                    </div>

                    <div className="w-[320px] hidden md:block">
                        <div className='' data-aos="fade-down">
                            <img src={clothes1} className="block w-40 sm:w-80 h-[200px]" alt="shose" />
                        </div>

                        <div data-aos="fade-up">
                            <img src={clothes3} className="block w-80 h-[200px]" alt="shose" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 3 */}
            <div className="w-full">
                <div className="flex flex-row w-full">
                    <div className="flex grow justify-between items-center bg-[#e9ebec]" data-aos="zoom-in">
                        <div className='ps-4 sm:ps-12'>
                            <h1>buy now</h1>
                            <button className='rounded py-1 px-3 mt-4 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg'>shop now</button>
                        </div>
                        <img src={DualSense} className="w-40 sm:w-80 h-[200px] sm:h-[400px]" alt="clothes" />
                    </div>

                    <div className="w-[320px] hidden md:block">
                        <div className='h-[50%] w-full overflow-hidden' data-aos="fade-down">
                            <img src={DualSense2} className="block w-80 h-[200px]" alt="shose" />
                        </div>

                        <div className="h-[50%] w-full overflow-hidden" data-aos="fade-up">
                            <img src={DualSense3} className='block w-80 h-[200px]' alt="shose" />
                        </div>
                    </div>
                </div>
            </div>
        </Slider>

    );
}

export default FadeSlider
