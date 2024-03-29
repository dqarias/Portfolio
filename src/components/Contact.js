import React, { useContext } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { MdLocationOn, MdSmartphone, MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import hoverButton from '../assets/sounds/hoverButton.wav';
import ThemeContext from '../context/theme/ThemeContext';
import SoundContext from '../context/sound/SoundContext';

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.5,
    },
  },

};

const Contact = () => {
  const [state, handleSubmit] = useForm('mgedpkaq');
  const { darkMode } = useContext(ThemeContext);
  const { soundMode } = useContext(SoundContext);
  const [buttonSound] = useSound(hoverButton);

  return (
    <motion.section
      id="contact"
      className={
        darkMode
          ? 'contact'
          : 'contact contact-light'
      }
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div
        className="contact__send-message"
      >
        <motion.h3
          className="contact__title"
          variants={textAnimate}
        >
          Send me a Message
        </motion.h3>
        {state && state.succeeded ? (
          <h2 className="contact__send-message-succeed">Your Message has been sent successfully!</h2>
        )
          : (
            <form
              onSubmit={handleSubmit}
            >
              <ul className="contact__message-form">
                <motion.li
                  className="contact__message-list"
                  variants={textAnimate}
                >
                  <input
                    className={
                      darkMode
                        ? 'contact__message-input'
                        : 'contact__message-input contact__message-input-light'
                    }
                    type="text"
                    name="user_name"
                    id="name"
                    placeholder="Write your name"
                    maxLength="30"
                    required
                  />
                  <input
                    className={
                      darkMode
                        ? 'contact__message-input'
                        : 'contact__message-input contact__message-input-light'
                    }
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Write your email"
                    required
                  />
                </motion.li>
                <motion.li
                  className="contact__message-list"
                  variants={textAnimate}
                >
                  <textarea
                    className={
                      darkMode
                        ? 'contact__message-input'
                        : 'contact__message-input contact__message-input-light'
                    }
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Write your message here"
                    maxLength="500"
                    required
                  />
                </motion.li>
                <li>
                  <ValidationError
                    className="contact__message-input-error"
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </li>
                <motion.li
                  className="contact__message-button"
                  variants={textAnimate}
                >
                  <button
                    className="btn"
                    type="submit"
                    disabled={state.submitting}
                    onMouseOver={
                    soundMode
                      ? buttonSound
                      : null
                    }
                    onFocus={
                    soundMode
                      ? buttonSound
                      : null
                    }
                  >
                    SEND MESSAGE
                  </button>
                </motion.li>
              </ul>
            </form>
          )}
      </div>
      <div
        className={
          darkMode
            ? 'contact__get-info'
            : 'contact__get-info contact__get-info-light'
        }
      >
        <motion.h3
          className="contact__title"
          variants={textAnimate}
        >
          Get in touch
        </motion.h3>
        <motion.p
          className={
          darkMode
            ? 'contact__info'
            : 'contact__info contact__info-light'
        }
          variants={textAnimate}
        >
          If you have an application you are interested
          in developing, a feature that you need built
          or a project that needs coding. I’d love
          to help with it.
        </motion.p>
        <motion.div
          className="contact__get-info-contact"
        >
          <motion.p
            className="contact__get-info-details"
            variants={textAnimate}
          >
            <MdLocationOn className="contact__get-info-icons" />
            {' '}
            <span>Puno, Peru</span>
          </motion.p>
          <motion.p
            className="contact__get-info-details"
            variants={textAnimate}
          >
            <MdSmartphone className="contact__get-info-icons" />
            {' '}
            <span>(+51) 991258588</span>
          </motion.p>
          <motion.p
            className="contact__get-info-details"
            variants={textAnimate}
          >
            <MdEmail className="contact__get-info-icons" />
            {' '}
            <span>dino.quispea@gmail.com</span>
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
