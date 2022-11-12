import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { MdLocationOn, MdSmartphone, MdEmail } from 'react-icons/md';

const Contact = () => {
  const [state, handleSubmit] = useForm('mgedpkaq');

  return (
    <section className="contact" id="contact-me">
      <div className="contact__send-message">
        <h3 className="contact__title">Send me a Message</h3>
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
                    className="contact__message-input"
                    type="text"
                    name="user_name"
                    id="name"
                    placeholder="Write your name"
                    maxLength="30"
                    required
                  />
                  <input
                    className="contact__message-input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Write your email"
                    required
                  />
                </li>
                <li className="contact__message-list">
                  <textarea
                    className="contact__message-input"
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
      <div className="contact__get-info">
        <h3 className="contact__title">Get in touch</h3>
        <p className="contact__info">
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
    </section>
  );
};

export default Contact;
