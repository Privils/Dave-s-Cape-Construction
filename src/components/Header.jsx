import React, { useEffect, useState } from "react";
import { FaPhone, FaClock, FaEnvelope, FaBars, FaWindowClose } from "react-icons/fa";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

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

  return (
   <>
    <header>
        {/* Header Information Section */}
        <div className="header-div">
          <div className="header-icon-divs">
            <FaPhone className="FaPhone" />
            <p>
              Get in touch <br />
              <span>+27 889 67634 782</span>
            </p>
          </div>
          <div className="header-icon-divs">
            <FaEnvelope className="FaEnvelope" />
            <p>
              Email us at <br />
              <span>contact@gmail.com</span>
            </p>
          </div>
          <div className="header-icon-divs">
            <FaClock className="FaClock" />
            <p>
              Working Hours <br />
              <span>08:00 - 16:00</span>
            </p>
          </div>
        </div>
        <nav id="nav" className={isSticky ? "sticky" : ""}>
          <div className={isSticky ? "nav-div sticky" : "nav-div"}>
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
            <FaBars className="checkbtn" onClick={toggleMenu} />
            <ul className={menuActive ? "active" : ""}>
              <FaWindowClose className="close" onClick={toggleMenu} />
              <li className="lists">
                <Link to="/">Home</Link>
              </li>
              <li className="lists">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="lists">
                <Link to="#services">Services</Link>
              </li>
              <li className="lists">
                <Link to="#about">About</Link>
              </li>
              <li className="lists">
                <Link to="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
   </>
  );
};

export default Header;
