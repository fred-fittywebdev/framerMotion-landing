import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Images from '../images/anglet.jpg';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations/Index';

const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Header />
      <Hero
        image={Images}
        title="Anglet"
        desc="Surfing experience in France !"
      />
    </motion.div>
  );
};

export default Home;
