import React from 'react';
import { assets } from '../assets/assets';

const Offers = () => {
    return (
        <div className='px-[2vw] sm:px-[5vw] md:px-[6vw] lg:px-[7vw] my-20 flex-col  flex '>
            <div className='group flex flex-col justify-center items-start p-3 sm:p-8 bg-cover bg-center ' style={{ backgroundImage: `url(${assets.b9_img})` }}>
                <h4 className='text-white text-[20px] font-light'>Crazy Deals</h4>
                <h2 className='text-white text-[28px] font-extrabold'>Buy 2 Get 1 Free</h2>
                <span className='text-white text-[14px] font-medium pb-[15px]'>The best classic dress is on sale at cara</span>
                <button class="text-[13px] font-semibold px-[18px] py-[11px]  cursor-pointer rounded bg-[#fff] group-hover:bg-[#088178] group-hover:text-white transform duration-500">Learn More</button>
            </div>
            <div className='group flex flex-col justify-center items-start p-3  sm:p-8 bg-cover bg-center h-[45vh]' style={{ backgroundImage: `url(${assets.hero_img})` }}>
                <h4 className='text-white text-[20px] font-light'>Spring / Summer</h4>
                <h2 className='text-white text-[28px] font-extrabold'>Upcomming Season</h2>
                <span className='text-white text-[14px] font-medium pb-[15px]'>The best classic dress is on sale at cara</span>
                <button class="text-[13px] font-semibold px-[18px] py-[11px] cursor-pointer rounded bg-[#fff] group-hover:bg-[#088178] group-hover:text-white transform duration-500">Collection</button>
            </div>
        </div>
        
    );
};

export default Offers;