import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
import { CgCloseO } from 'react-icons/cg';
import { motion, AnimatePresence } from 'framer-motion';
import logow from '../assets/img/logow.png';

const Header = () => {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        delay: 1.2,
      },
    },
  };

  return (
    <>
      <nav className="navigation">
        <img className="navigation__img" src={logow} alt="logo" />
        <ul className="navigation__menu">
          <NavLink to="/about">
            <li className="navigation__link">About</li>
          </NavLink>
          <NavLink to="/portfolio">
            <li className="navigation__link">Work</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="navigation__link">Contact</li>
          </NavLink>
        </ul>
        <div className="navigation__hamburguer">
          <AnimatePresence>
            {open && (
            <motion.div
              className="navigation__hamburguer-div"
              variants={item}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 300, opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit="exit"
            >

              <motion.ul
                className="navigation__hamburguer-menu"
              >
                <motion.img className="navigation__hamburguer-menu-img" src={logow} alt="logo" />
                <NavLink to="/about">
                  <motion.li
                    className="navigation__hamburguer-menu-link"
                    onClick={closeMenu}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    exit={{
                      opacity: 0,
                      y: 90,
                      transition: {
                        ease: 'easeInOut',
                        delay: 1,
                      },
                    }}
                  >
                    About
                  </motion.li>
                </NavLink>
                <NavLink to="/portfolio">
                  <motion.li
                    className="navigation__hamburguer-menu-link"
                    onClick={closeMenu}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    exit={{
                      opacity: 0,
                      y: 90,
                      transition: {
                        ease: 'easeInOut',
                        delay: 1,
                      },
                    }}
                  >
                    Work
                  </motion.li>
                </NavLink>
                <NavLink to="/contact">
                  <motion.li
                    className="navigation__hamburguer-menu-link"
                    onClick={closeMenu}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    exit={{
                      opacity: 0,
                      y: 90,
                      transition: {
                        ease: 'easeInOut',
                        delay: 1,
                      },
                    }}
                  >
                    Contact
                  </motion.li>
                </NavLink>
              </motion.ul>
            </motion.div>

            )}
          </AnimatePresence>
          {
            open
              ? (
                <button
                  onClick={closeMenu}
                  type="button"
                  className="btn-icon"
                >
                  <CgCloseO />
                </button>
              )
              : (
                <button
                  className="btn-icon"
                  type="button"
                  onClick={isOpen}
                >
                  <BiMenuAltLeft />
                </button>
              )
          }
        </div>
      </nav>

    </>

  );
};

export default Header;
