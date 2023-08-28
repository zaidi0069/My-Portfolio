import React from 'react'
import './Navbar.css'
import PropTypes from 'prop-types'
import {
  Link, 
} from "react-router-dom";

import { Link as ScrollLink } from 'react-scroll';



const Navbar = (props) => {

 
  return (

  <nav className={`navbar sticky-top p-1 navbar-expand-lg navbar-${props.mode.type} bg-${props.mode.type}`}>
    <div className="container-fluid  ">
        <a className="nav-link d-flex align-items-center ms-5 mt-2" href="/"><h3 className='zaid'>ZAID</h3></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        <div className="collapse navbar-collapse collapsednav dflex justify-content-end" id="navbarSupportedContent">

            
            <ul className="navbar-nav ms-lg-5 my-auto ">
          
            
              <li className="nav-item  mx-3">
              
              <ScrollLink className='nav-link hover'
                to="intro"
                spy={true}
                smooth={true}
                offset={-70} // Adjust this offset as needed to match your layout
                duration={300} // Duration of the scroll animation in milliseconds
              >
                <Link className={`hover text-${props.mode.inverse}`}  to='/'>Home</Link>
              </ScrollLink>
              </li>
              
              
             
              
              <li className="nav-item mx-3">
              <ScrollLink className='nav-link hover'
                to="main"
                spy={true}
                smooth={true}
                offset={-70} // Adjust this offset as needed to match your layout
                duration={300} // Duration of the scroll animation in milliseconds
              >
                <Link className={`hover text-${props.mode.inverse}`}>Services</Link>
              </ScrollLink>
              </li>


              <li className="nav-item dropdown mx-3">
                  <Link className={`nav-link dropdown-toggle hover text-${props.mode.inverse}`} to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About Me
                  </Link>
                  <ul className={`dropdown-menu bg-${props.mode.type}  `}>

                  
                    <ScrollLink className={`dropdown-item hover text-${props.mode.inverse} bg-${props.mode.type} `}
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={0} // Adjust this offset as needed to match your layout
                      duration={300} // Duration of the scroll animation in milliseconds
                      >
                       <Link className={`hover text-${props.mode.inverse}`} to='/'>My Projects</Link>
                    </ScrollLink>

                    <li><a className={`dropdown-item text-${props.mode.inverse} bg-${props.mode.type} `}  href="/">University</a></li>
                    <li><a className={`dropdown-item text-${props.mode.inverse} bg-${props.mode.type} `}  href="/">College</a></li>
                  </ul>
                </li>


                
                  <li >
                 
                      <div className="cv">
                      <Link to='/resume'>
                      <button type="button" className="btn btn-outline-success"> Download Resume</button>
                      </Link> 
                      </div>
                    </li>

               
                    <li>
                      <div className="dl form-check form-switch mx-3 d-flex align-items-center ">
                          <p className='mx-2 my-2 dl'>Light</p>
                          <input className="form-check-input mx-1 dl" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode }/>
                          <p className='mx-1 my-2 dl'>Dark</p>
                      </div>
                    </li>
                  
            
            </ul>
            
    </div> 
                 
                      
  </div>
</nav>



       

    
    
  )
}


Navbar.propTypes={
    title:PropTypes.string.isRequired,
}


export default Navbar
