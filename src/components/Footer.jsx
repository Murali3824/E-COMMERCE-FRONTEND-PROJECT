import React from 'react';
import { assets } from '../assets/assets';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='px-4 sm:px-[5vw] md:px-[6vw] lg:px-[7vw]'>
            <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 my-10 mt-36 text-sm'>
                <div>
                    <img src={assets.ecom_logo} alt="" className='mb-5 w-[50px] h-[26px] lg:h-auto lg:w-[75px] ' />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero excepturi illo praesentium dolore soluta itaque, q
                    </p>
                    <p className='text-lg font-normal mt-5 mb-2.5'>Follow us</p>
                    <div className='flex gap-3 '>
                        <Link to='#facebook'><i><FaFacebook /></i></Link>
                        <Link to='#twitter'><i><FaTwitter /></i></Link>
                        <Link to='#instagram'><i><FaInstagram /></i></Link>
                        <Link to='#youtube'><i><FaYoutube /></i></Link>
                        <Link to='#pinterest'><i><FaPinterest /></i></Link>
                    </div>
                </div>
                <div>
                    <p className='text-xl font-medium mb-2 sm:mb-5'>About</p>
                    <ul className=' grid grid-cols-2 sm:grid-cols-1 sm:gap-1 text-gray-600'>
                        <Link className='hover:text-[#088178]' to='/about'>About us</Link>
                        <Link className='hover:text-[#088178]' to='/contact'>Contact Us</Link>
                        <Link className='hover:text-[#088178]' to='/orders'>Delivery Information</Link>
                        <Link className='hover:text-[#088178]' to='/#'>Privacy Policy</Link>
                        <Link className='hover:text-[#088178]' to='/#'>Terms & Conditions</Link>
                        <Link className='hover:text-[#088178]' to='/#'>Cancellation Policy</Link>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-2 sm:mb-5'>My Account</p>
                    <ul className='grid grid-cols-2 sm:grid-cols-1 sm:gap-1 text-gray-600'>
                        <Link className='hover:text-[#088178]' to='/loginsignup'>Sign In</Link>
                        <Link className='hover:text-[#088178]' to='/cart'>View Cart</Link>
                        <Link className='hover:text-[#088178]' to='/orders'>Track My Order</Link>
                        <Link className='hover:text-[#088178]' to='/contact'>Help</Link>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-2 sm:mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-234-567-8901</li>
                        <li>contact@ecommerce.com</li>
                    </ul>
                </div>
            </div>
            <div className=''>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ ecommerce.com - All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;