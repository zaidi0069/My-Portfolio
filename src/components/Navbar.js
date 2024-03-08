import React from 'react'
import './Navbar.css'
import PropTypes from 'prop-types'
import {
  Link,
} from "react-router-dom";
import { useRef, useState, useEffect } from 'react';

import { Link as ScrollLink } from 'react-scroll';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar nvb sticky-top navbar-expand-lg navbar-${props.mode.type} bg-${props.mode.type}`} ref={navbarRef}>
      <div className="container-fluid">
        <a className="nav-link d-flex align-items-center ms-5 mt-2" href="/"><h3 className='zaid'>ZAID</h3></a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse collapsednav dflex justify-content-end ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-lg-5 my-auto">
            <li className="nav-item mx-3">
              <ScrollLink className='nav-link hover' to="intro" spy={true} smooth={true} offset={-70} duration={300}>
                <Link className={`hover text-${props.mode.inverse}`} to='/'>Home</Link>
              </ScrollLink>
            </li>
            <li className="nav-item mx-3">
              <ScrollLink className='nav-link hover' to="main" spy={true} smooth={true} offset={-70} duration={300}>
                <Link className={`hover text-${props.mode.inverse}`}>Skills</Link>
              </ScrollLink>
            </li>
            <li className="nav-item mx-3">
              <Link to='/resume' className="nav-link hover">Download Resume</Link>
            </li>
            <li className="nav-item mx-3">
              <div className="dl form-check form-switch d-flex align-items-center">
                <p className='mx-2 my-2 dl'>Light</p>
                <input className="form-check-input mx-1 dl" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
                <p className='mx-1 my-2 dl'>Dark</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Navbar;