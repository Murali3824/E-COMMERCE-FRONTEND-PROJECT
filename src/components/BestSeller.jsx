import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { useState } from 'react';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    // console.log(products);

    const [bestSeller,setBestSeller] = useState([])

    useEffect( () => {
        const bestProduct = products.filter((item)=>(item.bestseller))
        setBestSeller(bestProduct.slice(0,8))
    },[])

    return (
        <div className='my-10 px-[2vw] sm:px-[5vw] md:px-[6vw] lg:px-[7vw]'>
            <div className='flex flex-col items-center text-center py-8 text-3xl sm:text-4xl'>
                <Title  text1={' Best'} text2={'SELLERS'}/>
                <p className='w-3/4 mt-1 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas repellat
                </p>
            </div>
            {/* Rendering Products */}
            <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 gap-y-6'>
                {
                    bestSeller.map((item,index)=>(
                        <ProductItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                        />
                    ))
                }
            </div>
            <div className='text-center my-10'>
                <Link to='/shop' className='group inline-block sm:h-[52px] leading-[49px] bg-[#000000] hover:bg-[#088178] transform transition ease-in-out duration-300 rounded-[2px] px-4 sm:px-7 md:px-9  align-middle text-[#fff] text-sm sm:tracking-[0.75px]  relative overflow-hidden'>
                    <div className='flex items-center gap-4'>
                        <span>VIEW ALL PRODUCTS</span>
                        <FaArrowRightLong className='transform sm:group-hover:translate-x-3 ease-in-out duration-500' />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default BestSeller;