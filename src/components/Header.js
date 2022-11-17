import React, { useState, useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import { BiMenuAltLeft } from 'react-icons/bi';
import { CgCloseO } from 'react-icons/cg';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMoon, FaSun, FaVolumeUp, FaVolumeOff,
} from 'react-icons/fa';
import useSound from 'use-sound';
import allowSound from '../assets/sounds/open.wav';
import disableSound from '../assets/sounds/close.wav';
import ThemeContext from '../context/theme/ThemeContext';
import SoundContext from '../context/sound/SoundContext';
import logob from '../assets/img/logocd.png';
import logoWhite from '../assets/img/logoBrandDino.png';

const Header = () => {
  const { darkMode, handleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const { soundMode, handleSound } = useContext(SoundContext);
  const [openSound] = useSound(allowSound);
  const [closeSound] = useSound(disableSound);
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
        <HashLink
          to="/#hero"
          className="navigation__hash"
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
        </HashLink>

        <ul
          className="navigation__menu"
        >
          <HashLink to="/#about">
            <li
              className={
              darkMode
                ? 'navigation__link'
                : 'navigation__link navigation__link-light'
            }
            >
              About
            </li>
          </HashLink>
          <HashLink to="/#work">
            <li
              className={
                darkMode
                  ? 'navigation__link'
                  : 'navigation__link navigation__link-light'
              }
            >
              Work
            </li>
          </HashLink>
          <HashLink to="/#contact">
            <li
              className={
                darkMode
                  ? 'navigation__link'
                  : 'navigation__link navigation__link-light'
              }
            >
              Contact
            </li>
          </HashLink>
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
                <HashLink to="/#hero">
                  <motion.img
                    className="navigation__hamburguer-menu-img"
                    src={logoWhite}
                    alt="logo"
                    onClick={closeMenu}
                  />
                </HashLink>
                <HashLink to="/#about">
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
                </HashLink>
                <HashLink to="/#work">
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
                </HashLink>
                <HashLink to="/#contact">
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
                </HashLink>
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
                  <button
                    type="button"
                    className="navigation__hamburguer-menu-config-btn"
                    onClick={() => {
                      handleSound();
                      setOpen(false);
                    }}
                  >
                    {
                      soundMode
                        ? (
                          <FaVolumeUp
                            onClick={closeSound}
                            className={
                              darkMode
                                ? 'config__icon'
                                : 'config__icon-light'
                              }
                          />
                        ) : (
                          <FaVolumeOff
                            onClick={openSound}
                            className={
                                darkMode
                                  ? 'config__icon'
                                  : 'config__icon-light'
                              }
                          />
                        )
}

                  </button>
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
