import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
    const [method, setMethod] = useState('cod');
    const { navigate } = useContext(ShopContext);

    // Form state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate form fields
    const validateForm = () => {
        const { firstName, email, street, city, state, zipcode, country, phone } = formData;

        // Basic validation for empty fields
        if (!firstName || !email || !street || !city || !state || !zipcode || !country || !phone) {
            setErrorMessage('Please fill out all required fields.');
            return false;
        }
        return true;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        if (validateForm()) {
            navigate('/orders'); // Navigate only if form is valid
        }
    };

    return (
        <form onSubmit={handleSubmit} className='px-4 sm:px-[5vw] md:px-[6vw] lg:px-[7vw] flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
            {/* Left Side */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <div className='text-2xl sm:text-3xl my-3'>
                    <Title text1={'Delivery'} text2={'INFORMATION'} />
                </div>
                <div className='flex gap-3'>
                    <input 
                        required 
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                        type="text" 
                        placeholder='First Name' 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                    <input 
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                        type="text" 
                        placeholder='Last Name' 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </div>
                <input 
                    required 
                    className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                    type="email" 
                    placeholder='Email Address'
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <input 
                    required 
                    className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                    type="text" 
                    placeholder='Street' 
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                />
                <div className='flex gap-3'>
                    <input 
                        required 
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                        type="text" 
                        placeholder='City' 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                    />
                    <input 
                        required 
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                        type="text" 
                        placeholder='State' 
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='flex gap-3'>
                    <input 
                        required 
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                        type="number" 
                        placeholder='Zipcode' 
                        name="zipcode"
                        value={formData.zipcode}
                        onChange={handleInputChange}
                    />
                    <input 
                        required 
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                        type="text" 
                        placeholder='Country' 
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                    />
                </div>
                <input 
                    required 
                    className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                    type="number" 
                    placeholder='Phone' 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
            </div>
            {/* Right Side */}
            <div className='mt-8'>
                <div className='mt-8 min-w-80'>
                    <CartTotal />
                </div>
                <div className='mt-12'>
                    <Title text1={'PAYMENT '} text2={'METHOD'} />
                    {/* Payment method selection */}
                    <div className='flex md:mt-5 gap-3 flex-col lg:flex-row'>
                        <div onClick={() => setMethod('stripe')} className='flex mt-5 md:mt-0 items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                        </div>
                        <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
                        </div>
                        <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                            <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                        </div>
                    </div>
                </div>
                <div className='w-full text-end mt-8'>
                    <button type='submit' className='bg-black rounded text-white text-sm px-16 py-3'>PLACE ORDER</button>
                </div>
            </div>
            {/* Error message */}
            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        </form>
    );
};

export default PlaceOrder;
