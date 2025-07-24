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
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ullam enim culpa tempore deserunt odit id quos aperiam velit pariatur nihil, cumque eum sint quasi labore unde eius accusamus vero.
          Labore, molestiae quia. Assumenda minima reiciendis totam, iste a consectetur, doloremque culpa numquam eligendi velit facilis, repudiandae adipisci sapiente quo quod. Facere ea maiores omnis quisquam nisi animi expedita dolorem!
          Illum, similique excepturi! Magni, exercitationem iusto sit maxime quibusdam dolorem quod suscipit maiores voluptatum. quisquam at a eum animi. Cumque, nobis veniam.</p>
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
