import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";

const Searcbar = () => {
    const [toggle, setToggle] = useState(false);

    const toggleBtn = () => {
        setToggle(!toggle);
    };

    return (
        <div className="px-4">
            <div>
                <div className="border-2 w-full rounded-full flex justify-between text-sm">
                    <motion.div
                        className={toggle ? "w-full p-3 bg-[#154965] transform transition-all text-white rounded-l-full flex items-center gap-2" : "w-full p-3 transform transition-all rounded-l-full flex items-center gap-2"}
                        initial={{ backgroundColor: '#154965' }}
                        animate={{ backgroundColor: toggle ? '#154965' : '#ffffff' }}
                    >
                        <motion.span
                            onClick={toggleBtn}
                            className="bg-[#154965] cursor-pointer p-3 transition-all rounded-full text-white"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            {toggle ? <IoIosSearch size={25} /> : <IoLocationOutline size={25} />}
                        </motion.span>
                        <div>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className='inline-block'
                            >
                                {toggle ? 'Search Here' : 'United States'}
                            </motion.p>
                        </div>
                    </motion.div>
                    <div className="flex items-center gap-1 w-full p-3">
                        <span><CiCalendar size={22} /></span>
                        <div>
                            <p className="text-gray-600">Check in</p>
                            <p className="text-gray-600">DD/MM/YY</p>
                        </div>
                    </div>
                    <div className="md:flex hidden items-center gap-1 w-full p-1">
                        <span><CiCalendar size={22} /></span>
                        <div>
                            <p className="text-gray-600">Check Out</p>
                            <p className="text-gray-600">DD/MM/YY</p>
                        </div>
                    </div>
                    <div className="flex items-center w-full gap-1 p-1">
                        <span><LuUsers /></span>
                        <p className="text-gray-600">Misafir ekleyin</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searcbar;
