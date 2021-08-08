import React from 'react';
import { Container } from 'react-bootstrap';
import logo1 from '../../assets/img/soc1.svg';
import logo2 from '../../assets/img/soc2.svg';
import logo3 from '../../assets/img/soc3.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer_text">Get richer on crypto exchange...</p>
      <div className="footer_img">
        <img className="footer_logo-soc" src={logo1} alt="logo1" />
        <img className="footer_logo-soc" src={logo2} alt="logo2" />
        <img className="footer_logo-soc" src={logo3} alt="logo3" />
      </div>
    </footer>
  );
};

export default Footer;
