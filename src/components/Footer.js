import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container" style={{userSelect: 'auto'}}>
       
      {/* <p className="footer-text">Connect with me</p> */}
      <div className="footer-content">
   
        <div className='connect'>
          <p>Connect with me &nbsp; &nbsp;</p>
          <div className="social-icons">
         
         <a href="https://www.facebook.com/ZAIDi.0026" className="social-icon" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-facebook-f"></i>
         </a>
         <a href="https://www.instagram.com/zayyedi_26/" className="social-icon" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-instagram"></i>
         </a>
         <a href="https://www.linkedin.com/in/muhammad-zaid-585a2920a/" className="social-icon" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-linkedin-in"></i>
         </a>
         <a href="https://github.com/zaidi0069" className="social-icon" target="_blank" rel="noopener noreferrer">
         <i className="fab fa-github"></i>
         </a>
       </div>
        </div>
      

        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>&nbsp;zayyed.0069@gmail.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>&nbsp;Rawalpindi,Punjab,PK</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <span>&nbsp;+923117485771</span>
          </div>
        </div>
       
      </div>
    
    </footer>
  );
};

export default Footer;
