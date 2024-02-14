import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import './Nav.css';
import Navlinks from './NavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [mobile, setMobile] = useState(true);

  const handleCheckboxBurger = () => {
    setMobile((current) => !current);
  };
  return (
    <nav>
      <div className='nav-frame'>
        <Link className='nav' to='/'>
          <img className='nav-logo' src={Logo} alt='navigation little lemon logo'></img>
        </Link>
        <div className='normal'>
          <Navlinks />
        </div>
        <div  className='burgerContainer'>
          {mobile ? (
            <FontAwesomeIcon
             aria-hidden="false"
              aria-label='Menu'
              title='Menu'
              className='faIcon'
              icon={faBars}
              style={{ color: 'black', cursor: 'pointer' }}
              onClick={handleCheckboxBurger}
              size='xl'
            />
          ) : (
            <>
              <FontAwesomeIcon
                aria-hidden="false"
                aria-label='Close button'
                className='faIcon'
                icon={faTimes}
                style={{ color: 'black', cursor: 'pointer' }}
                onClick={handleCheckboxBurger}
                size='xl'
              />
              <div className='burger'>
                <Navlinks handleCheckboxBurger={handleCheckboxBurger} />
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
