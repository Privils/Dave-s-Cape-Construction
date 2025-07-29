import React, { useEffect, useState } from "react";
import {
  FaPhone,
  FaClock,
  FaEnvelope,
  FaBars,
  FaWindowClose,
} from "react-icons/fa";
import logo from "./images/D.jpg";
import { Link, useLocation } from "react-router-dom";
import "animate.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          <div
            className="logo-container"
            data-aos="fade-in"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
            <h1 className="animate__animated animate__fadeInLeft nimate__delay-2s	2s">
              dave's cape <br />
              construction
            </h1>
            <h2>From Foundation to Finish, We Do It Right</h2>
            <p className="animate__animated animate__fadeInRight nimate__delay-2s	2s">
              Professional. Dependable. Local.
            </p>
            <p className="animate__animated animate__fadeInRight">
              At Dave’s Cape Construction (DCC), we bring experience, precision,
              and passion to every project — from small repairs to large-scale
              renovations. Let us turn your vision into solid results.
            </p>
            <a
              href="https://wa.me/27659165816?text=Hello%2C%20I'm%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="header-btn">get a free qoute</button>
            </a>
          </div>
          <FaBars className="checkbtn" onClick={toggleMenu} />
          <ul className={menuActive ? "active" : ""}>
            <FaWindowClose className="close" onClick={toggleMenu} />

            {currentPath === "/" ? (
              <>
                <li className="dropdown animate__animated animate__fadeInTopRight nimate__delay-2s	2s">
                  <Link to="#">services</Link>
                  <ul className="dropdown-menu">
                    <li className="lists">
                      <Link to="/portfolio" onClick={toggleMenu}>
                        Portfolio
                      </Link>
                    </li>
                    <li className="lists">
                      <a href="#services" onClick={toggleMenu}>
                        Services
                      </a>
                    </li>
                    <li className="lists">
                      <a href="#about" onClick={toggleMenu}>
                        About
                      </a>
                    </li>
                    <li className="lists">
                      <a href="#contact" onClick={toggleMenu}>
                        Contact
                      </a>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <li className="lists">
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
            )}
            <a
              href="https://wa.me/27659165816?text=Hello%2C%20I'm%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="header-btn">get a free qoute</button>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
