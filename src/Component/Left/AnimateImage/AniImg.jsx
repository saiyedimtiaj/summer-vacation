import React from "react";
import log from "../../../assets/icons8-home-100.png";
import { motion } from "framer-motion";

const AniImg = () => {
  return (
    <div className="flex gap-3 items-center">
      <motion.div
        initial="hidden"
        className="text-2xl font-semibold"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 },
        }}
      >
        <img src={log} alt="" />
      </motion.div>
      <motion.div
        initial="hidden"
        className="text-2xl font-semibold"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 },
        }}
      >
        <img src={log} alt="" />
      </motion.div>

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
        <img src={log} alt="" />
      </motion.div>
    </div>
  );
};

export default AniImg;
