import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import avatar from "../assets/images/prof.png";
import Boot_logo from '../assets/images/bootstrap.png';
import Rea_logo from '../assets/images/react.png';
import JS from '../assets/images/js.png';
import CV from '../assets/resume.pdf';

export default function Header() {
  const [Navbar, setNavbar] = useState(false);

  function changeNavbar() {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);

    return () => {
      window.removeEventListener('scroll', changeNavbar);
    };
  }, []);

  return (
    <div id='Home' className='container-fluid header-height bg-b p-0'>
      <div className='container p-0'>
        <nav className={`${Navbar ? 'fixed' : ''} myNav navbar navbar-expand-lg p-0 mb-5`}>
          <div className='container-fluid '>
            <a className='navbar-brand ms-5' href='/'>
              <img className='logo-size' src={logo} alt='' />
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav m-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <a className='nav-link active fs-50' aria-current='page' href='#Home'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active fs-50 ms-4' href='#About'>
                    About
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active fs-50 ms-4' href='#Portfolio'>
                    Portfolio
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active fs-50 ms-4' href='#Service'>
                    Service
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active fs-50 ms-4' href='#Contact'>
                    Contact
                  </a>
                </li>
              </ul>
              <form className='d-flex'>
                <a className='btn-out' href={CV} download='My Resume'>
                  Download CV
                </a>
              </form>
            </div>
          </div>
        </nav>
        <div>
          <div className='row first-sec '>
            <div className='col-md-6 d-flex flex-column justify-content-center align-items-center '>
              <div className=''>
                <h3 className='main-color'>Hello, I'm</h3>
                <h1 className='secondary fs-big'>Zakaria Zitouni</h1>
                <p className='secondary fs-5'>
                  A <span className='green'>Fullstack Developer</span> From Morocco
                </p>
                <p className='secondary'>
                excited about the opportunity to contribute to the success of your website. 
                </p>
                <div className='col-md-12 '>
                  <div className='col-md-6 d-flex align-items-start about'>
                    <button className='btn-out2'>About Me</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 padding-s'>
              <img className='main-photo-size-first' src={avatar} alt='' />
            </div>
            <img className={`${Navbar ? 'navbar-toggler ' : ''}logo-b logos`} src={Boot_logo} alt='bootstrap-logo' />
            <img className={`${Navbar ? 'navbar-toggler ' : ''}logo-r logos`} src={Rea_logo} alt='react-logo' />
            <img className={`${Navbar ? 'navbar-toggler ' : ''}logo-js logos`} src={JS} alt='js-logo' />
          </div>         
          </div>
      </div>
    </div>
  );
}
