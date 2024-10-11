import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const Collection = () => {

    const {products,search,showSearch} = useContext(ShopContext)

    const [showFilter,setShowFilter] = useState(false)

    const [filterProducts,setFilterProducts] = useState([]);
    // useEffect(()=> {
    //     setFilterProducts(products);
    // },[])

    const [category,setCategory] = useState([]);
    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else{
            setCategory(prev => [...prev,e.target.value])
        }
    }
    useEffect(() => {
        console.log(category);
    },[category])

    const [subCategory,setSubCategory] = useState([]);
    const togglesubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else{
            setSubCategory(prev => [...prev,e.target.value])
        }
    }
    useEffect(() => {
        console.log(subCategory);
    },[subCategory])

    const applyFilter = () => {
        let productsCopy = products.slice();
        if(showSearch && search) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category))
        }
        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
        }
        setFilterProducts(productsCopy)
    }

    useEffect(()=>{
        applyFilter();
    },[category,subCategory,search,showSearch])

    const [sortType,setSortType] = useState('relavent')


    const sortPoroduct = () => {
        let fpCopy = filterProducts.slice();
        switch(sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)))
                break;
            default:
                applyFilter();
                break;
        }
    }
    useEffect( () => {
        sortPoroduct()
    },[sortType])

    return (
        <div>
            <div className='leading-[54px] p-1 flex flex-col justify-center items-center text-center w-full h-max-[35vh] sm:h-[35vh] bg-cover bg-center' style={{ backgroundImage: `url(${assets.banner2_img})` }}>
                    <p className='text-white text-[45px] md:text-[50px] font-semibold py-2.5'>#stayHOME</p>
                    <p className='text-white text-[14px] md:text-[16px] p-1 text-wrap'>Save more money with coupons & up to 70% off!</p>
            </div>
            <div className=' sm:px-[5vw] md:px-[6vw] lg:px-[7vw] flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

                {/* Filter Page */}
                <div className='min-w-60 px-2 sm:px-0'>
                    <p onClick={()=>{setShowFilter(!showFilter)}} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
                        <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : '' }`} src={assets.dropdown_icon} alt="" />
                    </p>

                    {/* Category filter */}
                    <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>    
                        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                            <p className='flex gap-2'>
                                <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/>
                                Men
                            </p>
                            <p className='flex gap-2'>
                                <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/>
                                Women
                            </p><p className='flex gap-2'>
                                <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/>
                                Kids
                            </p>
                        </div>            
                    </div>

                    {/* Sub Category Type filter */}
                    <div className={`border border-gray-300 pl-5 py-3 mt-6 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                        <p className='mb-3 text-sm font-medium'>TYPE</p>    
                        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                            <p className='flex gap-2'>
                                <input className='w-3' type="checkbox" value={'Topwear'} onChange={togglesubCategory}/>
                                Topwear
                            </p>
                            <p className='flex gap-2'>
                                <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={togglesubCategory}/>
                                Bottomwear
                            </p><p className='flex gap-2'>
                                <input className='w-3' type="checkbox" value={'Winterwear'} onChange={togglesubCategory}/>
                                Winterwear
                            </p>
                        </div>            
                    </div>
                </div>

                {/* Right side */}
                <div className='flex-1 px-2 sm:px-0 '>
                    <div className='flex justify-between text-2xl sm:text-3xl mb-4'>
                        <Title text1={'All'} text2={'COLLECTIONS'} />
                        {/* Product Sort  */}
                        <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm h-[30px] sm:h-auto p-1 w-[110px]'>
                            <option value="relavent">Relavent</option>
                            <option value="low-high">Low to High</option>
                            <option value="high-low">High to Low</option>
                        </select>
                    </div>

                    {/* Map Products  */}
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 gap-y-6'>
                    {
                        filterProducts.map((item,index)=>(
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

            </div>
        </div>
        
    );
};

export default Collection;