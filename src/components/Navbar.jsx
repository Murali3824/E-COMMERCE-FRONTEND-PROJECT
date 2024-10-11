import React,{useContext, useState} from 'react';
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible,setVisible] = useState(false)
    const {setShowSearch,getCartCount} = useContext(ShopContext)

    

    return (
        <div className='px-3 sm:px-[5vw] md:px-[6vw] lg:px-[7vw] flex items-center justify-between  py-5 font-medium'>
            
            <Link className='' to='/'>
                <img src={assets.ecom_logo} alt="" className=' w-[50px] h-[26px] sm:w-[60px] sm:h-[30px] lg:h-auto lg:w-[75px] ' />
            </Link>

            <ul className='hidden sm:flex gap-8 text-base text-[#222]'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p className='font-medium md:text-lg '>Home</p>
                    <hr className='w-[100%] border-none h-[1.5px] bg-[#088178] hidden' />
                </NavLink>
                <NavLink to='/shop' className='flex flex-col items-center gap-1'>
                    <p className='font-medium md:text-lg'>Shop</p>
                    <hr className='w-[100%] border-none h-[1.5px] bg-[#088178] hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p className='font-medium md:text-lg'>About</p>
                    <hr className='w-[100%] border-none h-[1.5px] bg-[#088178] hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p className='font-medium md:text-lg'>Contact</p>
                    <hr className='w-[100%] border-none h-[1.5px] bg-[#088178] hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <Link to="/shop">
                    <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
                </Link>
                <div className='group relative'>
                    <Link to='/loginsignup'>
                        <img src={assets.profile_icon} className='w-5 cursor-pointer'  alt="" />
                    </Link>
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col  w-36 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer px-4 py-2 text-sm hover:bg-black hover:text-white transition-all duration-500'>My Profile</p>
                            <Link to='/orders'><p className='cursor-pointer px-4 py-2 text-sm hover:bg-black hover:text-white transition-all duration-500'>Orders</p></Link>
                            <p className='cursor-pointer px-4 py-2 text-sm hover:bg-black hover:text-white transition-all duration-500'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5 cursor-pointer'  alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                        {getCartCount()}
                    </p>
                </Link>

                <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>

            {/* Sidebar menu for small screen */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${visible ?'w-[85%]' : 'w-0'}`}>
                <div className='flex flex-col text-[#222]'>
                    <div onClick={()=>setVisible(false)} className='m-4 mt-6  p-4 cursor-pointer'>
                        <img src={assets.cross_icon} className=' w-4' alt="" />
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className='py-4 pl-6 ' to='/shop'>SHOP</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-4 pl-6 ' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-4 pl-6 ' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-4 pl-6 ' to='/contact'>CONTACT</NavLink>
                </div>
            </div>

        </div>
    );
};

export default Navbar;