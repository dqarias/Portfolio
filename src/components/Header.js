import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
import { CgCloseO } from 'react-icons/cg';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaVolumeUp } from 'react-icons/fa';
import ThemeContext from '../context/theme/ThemeContext';
import logow from '../assets/img/logow.png';
import logob from '../assets/img/logocd.png';
import logoWhite from '../assets/img/logoWhite.png';

const Header = () => {
  const { darkMode, handleTheme } = useContext(ThemeContext);
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
      <motion.nav
        className={
          darkMode
            ? 'navigation'
            : 'navigation navigation__light'
        }
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        <motion.img
          className="navigation__img"
          src={
            darkMode
              ? logoWhite
              : logob
          }
          alt="logo"
        />
        <ul
          className="navigation__menu"
        >
          <NavLink to="/about">
            <li
              className={
              darkMode
                ? 'navigation__link'
                : 'navigation__link navigation__link-light'
            }
            >
              About
            </li>
          </NavLink>
          <NavLink to="/portfolio">
            <li
              className={
                darkMode
                  ? 'navigation__link'
                  : 'navigation__link navigation__link-light'
              }
            >
              Work
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li
              className={
                darkMode
                  ? 'navigation__link'
                  : 'navigation__link navigation__link-light'
              }
            >
              Contact
            </li>
          </NavLink>
        </ul>
        <div className={
          darkMode
            ? 'navigation__hamburguer'
            : 'navigation__hamburguer navigation__hamburguer__light'
        }
        >
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
                <motion.div
                  className="navigation__hamburguer-menu-config"
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
                  <button
                    type="button"
                    className="navigation__hamburguer-menu-config-btn"
                    onClick={() => {
                      setOpen(false);
                      handleTheme();
                    }}
                  >
                    {
                  darkMode ? (
                    <FaSun
                      className=""
                    />
                  ) : (
                    <FaMoon
                      className=""
                    />
                  )

                }
                  </button>
                  <FaVolumeUp />
                </motion.div>
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
                  className={
                    darkMode
                      ? 'btn-icon'
                      : 'btn-icon btn-icon-light'
                  }
                  type="button"
                  onClick={isOpen}
                >
                  <BiMenuAltLeft />
                </button>
              )
          }
        </div>
      </motion.nav>

    </>

  );
};

export default Header;
