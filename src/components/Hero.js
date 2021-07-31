import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  background: url(${({ image }) => image && image}) center;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: -60px;
`;

const Container = styled.div`
  color: #fff;
  padding: 2rem;
  backdrop-filter: blur(8px);
  background: rgba(83, 196, 185, 0.158);
  box-shadow: 0px 0px 16px 0px rgba(255, 255, 255, 0.5);
  margin: 2rem 2rem 2rem 4.5rem;
  border-radius: 10px;

  h1 {
    font-size: clamp(2rem, 8vw, 5rem);
    margin-bottom: 1.5rem;
  }

  p {
    font-size: clamp(1rem, 6vw, 2.5rem);
    margin-bottom: 1rem;
  }

  button {
    font-size: clamp(0.8rem, 4vw, 1.2rem);
    padding: 0.8rem 2rem;
    color: #fff;
    background: blue;
    background: linear-gradient(to right, #4aa9d8, #0774a0);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
  }
`;

const Hero = ({ image, title, desc }) => {
  return (
    <Section image={image}>
      <Container>
        <h1>{title}</h1>
        <p>{desc}</p>
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 8px rgb(255,255,255',
            boxShadow: '0px 0px 8px rgb(255,255,255',
          }}
        >
          Voir plus
        </motion.button>
      </Container>
    </Section>
  );
};

export default Hero;
