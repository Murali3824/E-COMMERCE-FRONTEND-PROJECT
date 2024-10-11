import React from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const NewDeals = () => {
    return (
        <div className='my-10 px-[2vw] sm:px-[5vw] md:px-[6vw] lg:px-[7vw] flex flex-col'>
            <div className='flex flex-col items-center text-center py-8 text-3xl sm:text-4xl'>
                <Title  text1={' New'} text2={'DEALS'}/>
            </div>
            <div className='flex justify-center items-center flex-col sm:flex-row gap-[30px] sm:gap-6 md:gap-8'>
                <Link to="/shop">
                    <img className='w-full' src={assets.new_1} alt="" />
                </Link>
                <Link to="/shop">
                    <img className='hidden sm:block' src={assets.new_2} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default NewDeals;