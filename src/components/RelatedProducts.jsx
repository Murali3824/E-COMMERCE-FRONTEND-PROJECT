import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { useState } from 'react';
import ProductItem from './ProductItem';

const RelatedProducts = ({category,subCategory}) => {
    
    const {products} = useContext(ShopContext);
    const [relatedProducts,setRelatedProducts] = useState([]);

    useEffect( () => {
        if (products.length > 0) {

            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
            // console.log(productsCopy.slice(0,4));
            setRelatedProducts(productsCopy.slice(0,4));
        }
    },[products])

    return (
        <div className='px-[2vw] sm:px-[5vw] md:px-[6vw] lg:px-[7vw] my-14'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'RELATED'} text2={'PRODUCTS'}/>
            </div>
            {/* Rendering Products */}
            <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 gap-y-6'>
                {
                    relatedProducts.map((item,index)=>(
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
        </div>
        
    );
};

export default RelatedProducts;