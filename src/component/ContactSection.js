import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-info">
          <h2>Got an Idea?<br />Let’s bring it to life!</h2>
          <p>
            Fill out the form, and our team will reach out within <strong>24 hours.</strong>
          </p>
          <div className="contact-methods">
            <div className="contact-card">
              <img src="/images/svg/email.svg" alt="Mail us" />
              <span>Mail us</span>
            </div>
            <div className="contact-card">
              <img src="/images/svg/whatsapp.svg" alt="WhatsApp" />
              <span>WhatsApp</span>
            </div>
            <div className="contact-card">
              <img src="/images/svg/hiring.svg" alt="Call us" />
              <span>Call Us</span>
            </div>
            <div className="contact-card">
              <img src="/images/svg/Telephone.svg" alt="Landline" />
              <span>Landline</span>
            </div>
            <div className="contact-card">
              <img src="/images/svg/skype.svg" alt="Skype" />
              <span>Skype</span>
            </div>
            <div className="contact-card">
              <img src="/images/svg/telegram.svg" alt="Telegram" />
              <span>Telegram</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" required />
              <i className="form-icon user-icon"></i>
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
              <i className="form-icon email-icon"></i>
            </div>
            <div className="form-group">
              <div className="phone-input">
                <select>
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  {/* Add more country codes as needed */}
                </select>
                <input type="tel" placeholder="Phone" required />
              </div>
              <i className="form-icon phone-icon"></i>
            </div>
            <div className="form-group">
              <textarea placeholder="Tell us about your project" rows="3"></textarea>
            </div>
            <div className="form-group">
              <label className="nda-label">
                <input type="checkbox" required /> 
                Your Idea is Fully Protected By Our <a href="/nda">Non-Disclosure Agreement (NDA)</a>
              </label>
            </div>
            <div className="form-group captcha-group">
              {/* Replace with actual reCAPTCHA */}
              <div className="recaptcha-placeholder">I'm not a robot</div>
            </div>
            <button type="submit" className="send-message-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
