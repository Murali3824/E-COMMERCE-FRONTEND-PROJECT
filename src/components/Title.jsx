import React from 'react';

const Title = ({text1,text2}) => {
    return (
        <div className='inline-flex gap-2 items-center md-3'>
            <p className='text-[#222]'>{text1} <span className='text-[#088178] font-medium'>{text2}</span> </p>
            {/* <p className='hidden sm:block w-8 sm:w-12 sm:h-[2px] bg-gray-700'></p> */}
            
        </div>
    );
};

export default Title;