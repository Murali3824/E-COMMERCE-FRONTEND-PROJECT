import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TextAnimi = () => {
    return (
        <TypeAnimation className=' text-[#088178] font-medium px-4 text-4xl lg:text-5xl'
        sequence={[
            // Same substring at the start will only be typed out once, initially
            'Shirts',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'T-Shirts',
            1000,
            'Trousers',
            1000,
            'Jackets',
            1000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        />
    );
};

export default TextAnimi;