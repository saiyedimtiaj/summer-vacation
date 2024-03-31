import React from 'react';
import { motion } from 'framer-motion';
import CardCarousel from './CardCarousel';
import image1 from "../../../assets/pexels-boonkong-boonpeng-1134176.jpg"
import image2 from "../../../assets/pexels-engin-akyurt-1579253.jpg"
import image3 from "../../../assets/pexels-pixabay-258154.jpg"
import image4 from "../../../assets/hero-1.webp"
import image5 from "../../../assets/hero-2.webp"

const Carousel = () => {
    const cards = [
       {img:image2},
       {img:image1},
       {img:image5},
       {img:image4},
       {img:image3},
      ];
    return (
        <div className='px-3 mt-3'>
         <motion.div
    initial="hidden"
    className='text-2xl font-semibold'
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 1 }}
    variants={{
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -150 }
    }}
    >
        Villa of summer firstlare
      </motion.div>
     <div className='mt-8'>
     <CardCarousel cards={cards} />
     </div>
        </div>
    );
};

export default Carousel;