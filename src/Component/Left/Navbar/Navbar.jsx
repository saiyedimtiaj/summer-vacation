import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CgMenuLeft } from "react-icons/cg";
import logo from '../../../assets/Captursdfe-removebg-preview.png';
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex justify-between px-3 py-4 gap-5'>
            <CgMenuLeft size={30} className='cursor-pointer' onClick={toggleSidebar} />
            <img className='h-12' src={logo} alt="" />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed top-0 left-0 h-full w-full bg-gray-900 bg-opacity-50 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="absolute top-0 left-0 h-full w-64 bg-white shadow-lg"
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                        >
                            {/* Sidebar content goes here */}
                               <div className='justify-end flex pr-4 pt-3 cursor-pointer'>
                                    <span onClick={toggleSidebar} ><IoCloseSharp size={35} /></span>
                               </div>
                            <div className="p-4">
                                <h1 className="text-xl font-semibold">Sidebar Content</h1>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
