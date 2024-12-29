import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer-box'>
      <div className="footer-content">
        <div className="d-flex justify-content-between flex-display">
            <div className="content-left">
                <h1 className='logo'>Tomato.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, inventore architecto? Doloremque repellat tempore ab facilis quae id quaerat qui, assumenda voluptate? Mollitia id exercitationem dicta dolores obcaecati quaerat laborum.</p>
                <div className="footer-icons">
                    <div className="footer-icon">
                        <img src="../../images/facebook-logo.png" alt="not found...."/>
                        <img src="../../images/instagram-logo.png" alt="not found...."/>
                        <img src="../../images/x-logo.png" alt="not found...."/>
                    </div>
                </div>
            </div>
            <div className="content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delievery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+121-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div><br/>
        <p className='text-center'>Copyright 2024 Tomato.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
