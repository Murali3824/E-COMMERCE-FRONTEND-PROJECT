import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
    return (
        <div className='mt-16 sm:px-[5vw] md:px-[6vw] lg:px-[7vw]  flex flex-row  gap-3.5 sm:gap-12 text-center  text-xs sm:text-sm md:text-base text-gray-700'>
            <div>
                <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'>Easy Exchange Policy</p>
                <p className='text-gray-400'>We Offer free exchange Policy</p>
            </div>
            <div>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'>7 Days Return Policy</p>
                <p className='text-gray-400'>We provide 7 days free return policy</p>
            </div>
            <div>
                <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'>Best Customer</p>
                <p className='text-gray-400'>We provide 24/7 customer support_img</p>
            </div>
        </div>
    );
};

export default OurPolicy;