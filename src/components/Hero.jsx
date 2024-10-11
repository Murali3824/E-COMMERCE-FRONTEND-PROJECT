import React from 'react';
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom';
import TextAnimi from './TextAnimi';



const Hero = () => {
    return (
        <div className='w-full bg-[#E3E5F1] flex flex-col gap-10 sm:flex-row border border-gray-400'>
            {/* Hero left side */}
            <div className=' w-full sm:w-1/2 flex flex-col gap-2 items-center justify-center pt-10 sm:py-0'>
                <div className='flex flex-col gap-3'>
                    <b className='text-[#222] font-medium px-4 text-4xl lg:text-5xl'>Provided Discount</b>
                    <b className='text-[#222] font-medium px-4 text-4xl lg:text-5xl'>On all<TextAnimi/></b>
                </div>
                <Link to='/shop' className=' cursor-pointer w-52  text-sm bg-cover bg-center  mt-5 p-2 text-[#088178]' style={{ backgroundImage: `url(${assets.button_bg})` }}>
                    <p className='text-center px-4 font-medium text-sm md:text-base'>Shop Now </p>
                </Link>
            </div>
            {/* hero left side */}
            <img className='w-full sm:w-1/2' src={assets.b1_img} alt="" />
        </div>
    );
};

export default Hero;