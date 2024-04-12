// Contact.js
import React from 'react';
import './Contact.css'; 
import fb from './assets/fb.png';
import download from './assets/download.jpg';

function Contact() {
  return (
    <div className="contact-container">
      <header>
        <h1>Contact Us</h1>
      </header>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <h3>Email: example@example.com</h3>
          <h3>Phone: +1 (123) 456-7890</h3>
        </div>
        <div className="social-media">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={download} alt="Instagram" />
              <h4>Instagram Profile: @cruise_insta</h4>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebook" />
              <h4>Facebook Profile: @cruise_facebook</h4>
            </a>
          </div>
        </div>
      </div>
      <div className="cruise-details">
        <h2>Cruise Details</h2>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</h5>
      </div>
      <footer>
        <h3>&copy; {new Date().getFullYear()} Cruise Management System. All rights reserved.</h3>
      </footer>
    </div>
  );
}

export default Contact;
