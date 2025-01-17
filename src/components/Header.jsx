import React from "react";
import {FaPhone, FaClock, FaEnvelope} from 'react-icons/fa'
import logo from './images/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
    console.log(logo)
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
        <nav className="nav">

       <div className="nav-div">
       <a href="">
            <img src={logo} alt=""  className="logo"/>
        </a>
        <ul>
            <li className="lists">
                <a to="/">Home</a>
                
                </li>
            <li className="lists"><a to="/">projects</a></li>
            <li className="lists"><a to="/">about</a></li>
            <li className="lists"><a to="/">contact</a></li>
        </ul>
        
       </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
