import React, { useEffect, useState } from "react";
import { FaPhone, FaClock, FaEnvelope, FaBars, FaWindowClose } from "react-icons/fa";
import logo from "./images/D.jpg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };



  const location = useLocation();
  const currentPath = location.pathname;

  return (
   <>
    <header>
      <nav className={isSticky ? "sticky" : ""}>
         <div className="logo-container">
           <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <h1>dave's cape <br/>construction</h1>
          <h2>From Foundation to Finish, We Do It Right</h2>
          <p>
Professional. Dependable. Local.</p>
<p>At Dave’s Cape Construction (DCC), we bring experience, precision, and passion to every project — from small repairs to large-scale renovations. Let us turn your vision into solid results.</p>
         <button className="header-btn">get a free qoute</button>
         </div>
          {/* <FaBars className="checkbtn" onClick={toggleMenu} /> */}
          <ul className={menuActive ? "active" : ""}>
            {/* <FaWindowClose className="close" onClick={toggleMenu} /> */}

            {currentPath === "/" ? (
              // Show all links except "Home" when on the home page
              <>
              <li className="dropdown">
                <Link to="#">
                services
                </Link>
                <ul className="dropdown-menu">
                   <li className="lists">
                  <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
                </li>
                <li className="lists">
                  <a href="#services" onClick={toggleMenu}>Services</a>
                </li>
                <li className="lists">
                  <a href="#about" onClick={toggleMenu}>About</a>
                </li>
                <li className="lists">
                  <a href="#contact" onClick={toggleMenu}>Contact</a>
                </li>
                </ul>
              </li>
              </>
            ) : (
              // Show only "Home" link when on any other page
              <li className="lists">
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
            )}
            <button className="header-btn">get a free qoute</button>
          </ul>
      </nav>
    </header>
   </>
  );
};

export default Header;
