import React, { useEffect, useState } from "react";
import {FaPhone, FaClock, FaEnvelope} from 'react-icons/fa'
import logo from './images/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <>
      <header>
        <div className="header-div">
          <div className="header-icon-divs">
           <FaPhone  className="FaPhone"/>
            <p>
            Get in touch <br />
             <span>  +27 889 67634 782</span>
            </p>
          </div>
          <div className="header-icon-divs">
            <FaEnvelope className="FaEnvelope"/>
            <p>
            Email us at <br />
      <span>contact@gmail.com</span>
            </p>
          </div>
          <div className="header-icon-divs">
           <FaClock className="FaClock"/>
            <p>
            Working Hours <br />
               <span> 08:00 - 16:00</span>           
            </p>
          </div>
        </div>
        <nav id="nav" className={isSticky ? "sticky" : ""}>
      <div className={isSticky ? "nav-div sticky" : "nav-div"}>
        <a href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <ul>
          <li className="lists"><a href="/">Home</a></li>
          <li className="lists"><a href="#projects">Portfolio</a></li>
          <li className="lists"><a href="#services">Services</a></li>
          <li className="lists"><a href="#about">About</a></li>
          <li className="lists"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
      </header>
    </>
  );
};

export default Header;
