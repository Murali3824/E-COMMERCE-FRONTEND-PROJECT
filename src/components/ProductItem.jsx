import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);

    return (
        <Link className=' md:w-auto sm:px-2 sm:py-2 border border-[#cce7d0]  text-gray-700 cursor-pointer transform transition ease-in-out duration-300 lg:hover:scale-105 active:scale-95  md:hover:shadow-[20px_20px_30px_rgba(0,0,0,0.1)]' to={`/product/${id}`}>
            <div className='overflow-hidden '>
                <img className='' src={image[0]} alt="" />
            </div>
            <div className='px-2 sm:px-0 flex items-center gap-1 mt-2 '>
                        <img src={assets.star_icon} alt="" className='w-3.5' />
                        <img src={assets.star_icon} alt="" className='w-3.5' />
                        <img src={assets.star_icon} alt="" className='w-3.5' />
                        <img src={assets.star_icon} alt="" className='w-3.5' />
                        <img src={assets.star_dull_icon} alt="" className='w-3.5' />
                        <p className='text-xs'>(3817)</p>
            </div>
            <p className='px-2 sm:px-0 pt-3 pb-1 lg:text-xs text-sm text-balance font-normal'>{name}</p>
            <p className='px-2 sm:px-0 text-sm font-medium'>{currency}{price}</p>
        </Link>
    );
};

export default ProductItem;