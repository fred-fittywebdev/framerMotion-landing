import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Images from '../images/california.jpg';
import { motion } from 'framer-motion';
import { animationTwo } from '../animations/Index';

const California = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      <Header />
      <Hero
        image={Images}
        title="California"
        desc="Surfing as lifestyle in USA !"
      />
    </motion.div>
  );
};

export default California;
