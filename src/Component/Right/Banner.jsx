import React from 'react';
import { motion } from 'framer-motion';
import image from '../../assets/Lovepik_com-401727999-green-earth.png';
import cloud from '../../assets/icons8-cloud-with-rain-96.png';

const Banner = () => {
    return (
        <div className='bg-[#8659bd] h-screen flex flex-col gap-10 items-center justify-center rounded-l-full'>
            <motion.img 
                className='h-28'
                src={cloud}
                alt=""
                animate={{ x: [0, 20, 0] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
            />
            <motion.img 
                className='w-[400px]'
                src={image}
                alt=""
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};

export default Banner;
