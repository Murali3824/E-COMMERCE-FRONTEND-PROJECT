import React, { useState } from 'react';

const LoginSignup = () => {

    const [currentState, setCurrentState] = useState("Sign Up");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>

            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='text-[#222] text-3xl font-medium'>{currentState}</p>
            </div>
            {currentState === "Sign Up" && (
                <input type="text" className='w-full px-3 py-2  border border-gray-800' placeholder='Name' required />
            )}
            <input type="email" className='w-full px-3 py-2  border border-gray-800' placeholder='Email' required />
            <input type="password" className='w-full px-3 py-2  border border-gray-800' placeholder='Password' required />
            <div className='w-full flex gap-1 flex-row justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer'>Forgot your password?</p>
                {
                    currentState === 'Login'
                    ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
                    : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
                }
            </div>
            <button className='bg-black text-white font-light px-5 py-2 sm:px-8'>
                {
                    currentState === 'Login' 
                    ? 'Sign In'
                    : 'Sign Up'
                }
            </button>
        </form>
    );
};

export default LoginSignup;