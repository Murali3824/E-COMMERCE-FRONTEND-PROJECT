import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import OurPolicy from '../components/OurPolicy'
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
    const { productId } = useParams();
    const { products,currency,addToCart, } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [image,setImage] = useState('')
    const [size,setSize] = useState('')

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item)
                // console.log(item);
                setImage(item.image[0])
                return null;
            }
        })
    };

    useEffect(() => {
        fetchProductData();
    }, [productId, products]);

    return productData ? (
        <div className='px-4 sm:px-[5vw] md:px-[6vw] lg:px-[7vw] border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/* Product data  */}
            <div className='flex gap-12 sm:gap-12 flex-col md:flex-row'>

                {/* Product images  */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
                        {
                            productData.image.map((item,index) => (
                                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
                            ))
                        }
                    </div>
                    <div className='w-full  sm:w-[80%]'>
                        <img  className='w-full h-auto' src={image} alt="" />
                    </div>
                </div>

                {/* Product information */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2 '>
                        <img src={assets.star_icon} alt="" className='w-3.5' />
                        <img src={assets.star_icon} alt="" className='w-3.5' />
                        <img src={assets.star_icon} alt="" className='w-3.5' />
                        <img src={assets.star_icon} alt="" className='w-3.5' />
                        <img src={assets.star_dull_icon} alt="" className='w-3.5' />
                        <p className='pl-2'>(3817)</p>
                    </div>
                    <p className='mt-5 text-2xl font-medium'>Price: {currency}{productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        <div className="flex gap-2">
                            {
                                productData.sizes.map((item, index) => (
                                    <button onClick={()=>setSize(item)} key={index} className= {`px-4 py-2 border rounded bg-gray-00 ${item === size ? 'bg-[#088178]' : '' } `}>
                                        {item}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded'>ADD TO CART</button>
                </div>
            </div>

            {/* Policy Section  */}
                                    
            <OurPolicy/>

            {/* Display related products  */}

            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

            
            

        </div>
    ) : (
        <p>Loading product data...</p>
    )
};

export default Product;
