import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Button} from './components/Button';
import './components/Button.css';
import './components/Navbar.css';






function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TechX
            <i class='fa fa-solid fa-microchip' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>

            <li>
              <Link
                to='/secret'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Secret 
                <i class="fa-sharp fa-solid fa-user-secret"></i>              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'> Secret </Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;