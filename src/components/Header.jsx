import React, { useEffect, useState } from "react";
import { FaPhone, FaClock, FaEnvelope, FaBars, FaWindowClose } from "react-icons/fa";
import logo from "./images/logo.jpg";
import { Link } from "react-router-dom";
import image1 from './images/background1.jpg';
import image2 from './images/background2.jpg';
import image3 from './images/background3.jpeg';
import image4 from './images/background4.jpg';
import image5 from './images/header-image-1.jpg';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const images = [
    { src: image1, alt: "construction" },
    { src: image2, alt: "construction" },
    { src: image3, alt: "construction" },
    { src: image4, alt: "construction" },
    { src: image5, alt: "construction" }
  ];


  const [randomImage, setRandom] = useState(images[0].src);
  const [fade, setFade] = useState(false);

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


  const getRandomImages = () => {
    const index = Math.floor(Math.random() * images.length);
    const randomImage = images[index];

  
    setFade(true); 
    setTimeout(() => {
      setRandom(randomImage.src); 
      setFade(false);
    }, 500); 
  };

  useEffect(() => {
    const intervalId = setInterval(getRandomImages, 7000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
   <>
    <header style={{ backgroundImage: `url(${randomImage})` }}>
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
