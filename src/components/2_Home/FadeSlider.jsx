import React, { useEffect } from 'react'
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
        dots: true,
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
            <div className="w-full border border-red-500">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex grow  justify-between" data-aos="zoom-in">
                        <h1>Finding Your Perfect Shoes</h1>
                        <img src={Shose} className="w-80 h-[200px] sm:h-[400px]" alt="shose" />
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
            <div className="w-full border border-red-500">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex grow  justify-between" data-aos="zoom-in">
                        <div>
                            <h1>Dress Sharp Everyday</h1>
                            <p>We have the premium set of formal wears for to make you look confident and comfortable at your job.</p>
                        </div>
                        <img src={clothes} className="w-80 h-[200px] sm:h-[400px]" alt="clothes" />
                    </div>

                    <div className="w-[320px] hidden md:block">
                        <div className='' data-aos="fade-down">
                            <img src={clothes1} className="block w-80 h-[200px]" alt="shose" />
                        </div>

                        <div data-aos="fade-up">
                            <img src={clothes3} className="block w-80 h-[200px]" alt="shose" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 3 */}
            <div className="w-full border border-red-500">
                <div className="flex flex-row w-full">
                    <div className="flex grow justify-between" data-aos="zoom-in">
                        <h1>Buy Now </h1>
                        <img src={DualSense} className="w-80" alt="shose" />
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
