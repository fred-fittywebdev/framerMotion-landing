import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { svgVariants } from '../animations/Index';
import { pathVariants } from '../animations/Index';

const Navbar = styled.nav`
  height: 60px;
  background: transparent;
  padding: 0rem calc((100vw - 1800px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

const Logo = styled(Link)`
  color: #fff;
  padding-left: 1rem;
  padding-top: 0.5rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
`;

const NavItems = styled.div``;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem;
`;

const Header = () => {
  return (
    <Navbar>
      <Logo to="/">
        <div className="logo">
          <motion.svg
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-ripple"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <motion.path
              variants={pathVariants}
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            ></motion.path>
            <motion.path
              variants={pathVariants}
              d="M3 7c3 -2 6 -2 9 0s6 2 9 0"
            ></motion.path>
            <motion.path
              variants={pathVariants}
              d="M3 12c3 -2 6 -2 9 0s6 2 9 0"
            ></motion.path>
            <motion.path
              variants={pathVariants}
              d="M3 17c3 -2 6 -2 9 0s6 2 9 0"
            ></motion.path>
          </motion.svg>
        </div>
      </Logo>
      <NavItems>
        <NavbarLink to="/">
          <motion.span
            whileHover={{
              scale: 1.1,
              textShadow: '0px 0px 8px rgb(255,255,255',
            }}
          >
            Anglet
          </motion.span>
        </NavbarLink>
        <NavbarLink to="/california">
          <motion.span
            whileHover={{
              scale: 1.1,
              textShadow: '0px 0px 8px rgb(255,255,255',
            }}
          >
            California
          </motion.span>
        </NavbarLink>
        <NavbarLink to="/bali">
          <motion.span
            whileHover={{
              scale: 1.1,
              textShadow: '0px 0px 8px rgb(255,255,255',
            }}
          >
            Bali
          </motion.span>
        </NavbarLink>
      </NavItems>
    </Navbar>
  );
};

export default Header;
