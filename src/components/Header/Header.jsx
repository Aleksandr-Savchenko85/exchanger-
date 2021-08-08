import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../../assets/img/binance-logo.png';

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <img className="header_logo" src={logo} alt="" />
        </div>
        <h1 className="header_text">Exchanger</h1>
      </header>
      ;
    </>
  );
};

export default Header;
