import React from 'react';
import flogo from '../../assets/flogo.png';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <section className='footer-container'>
        <img className='footer-logo' src={flogo} alt='little lemon logo' />
        <section className='footer-nav'>
          <h1 className='footer-nav-h1'>Navigation</h1>
          <ul className='footer-nav-ul'>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/about'>
              <li>About</li>
            </Link>
            <Link to='/menu'>
              <li>Menu</li>
            </Link>
            <Link to='/reservations'>
              <li>Reservations</li>
            </Link>
            <Link to='/order-online'>
              <li>Order Online</li>
            </Link>
            <Link to='/Login'>
              <li>Login</li>
            </Link>
          </ul>
        </section>
        <section className='footer-contact'>
          <h1>Contact</h1>
          <p className='address1'>4344 Maldove St, </p>
          <p className='address2'>Chicago Illinois </p>
          <p className='telephone'>(123)-456-2344</p>
          <p className='email'>info@little-lemon.com</p>
        </section>
        <section className='footer-socials'>
          <h1>Social Media Links</h1>
          <Link to='https://www.facebook.com' target="_blank">
          <p className='facebook'>Facebook</p>
          </Link>
          <Link to='https://www.twitter.com' target="_blank"> 
          <p className='twitter' >Twitter</p>
          </Link>
          <Link to='https://www.instagram.com' target="_blank">
          <p className='instagram'>Instagram</p>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Footer;
