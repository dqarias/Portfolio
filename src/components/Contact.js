import React, { useContext } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { MdLocationOn, MdSmartphone, MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import ThemeContext from '../context/theme/ThemeContext';

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

  return (
    <motion.section
      className={
        darkMode
          ? 'contact'
          : 'contact contact-light'
      }
      id="contact-me"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
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
                <li className="contact__message-list">
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
                </li>
                <li className="contact__message-list">
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
                </li>
                <li>
                  <ValidationError
                    className="contact__message-input-error"
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </li>
                <li className="contact__message-button">
                  <button className="btn" type="submit" disabled={state.submitting}>
                    Send Message
                  </button>
                </li>
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
        <p className={
          darkMode
            ? 'contact__info'
            : 'contact__info contact__info-light'
        }
        >
          If you have an application you are interested
          in developing, a feature that you need built
          or a project that needs coding. I’d love
          to help with it.
        </p>
        <div className="contact__get-info-contact">
          <p className="contact__get-info-details">
            <MdLocationOn className="contact__get-info-icons" />
            {' '}
            <span>Puno, Peru</span>
          </p>
          <p className="contact__get-info-details">
            <MdSmartphone className="contact__get-info-icons" />
            {' '}
            <span>(+51) 991258588</span>
          </p>
          <p className="contact__get-info-details">
            <MdEmail className="contact__get-info-icons" />
            {' '}
            <span>dino.quispea@gmail.com</span>
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
