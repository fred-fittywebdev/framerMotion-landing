import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Images from '../images/bali.jpg';
import { motion } from 'framer-motion';
import { animationThree } from '../animations/Index';

const Bali = () => {
  return (
    <motion.div
      initial="out"
      animate="end"
      exit="out"
      variants={animationThree}
    >
      <Header />
      <Hero image={Images} title="Bali" desc="Indonesian waves !" />
    </motion.div>
  );
};

export default Bali;
