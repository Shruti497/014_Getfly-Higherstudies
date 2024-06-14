import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://linkedin.com">LinkedIn</a>
        <a href="https://twitter.com">Twitter</a>
      </div>
      <div className="navigation-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="contact-info">
        <p>Email: info@example.com</p>
      </div>
    </footer>
  );
};

export default Footer;
