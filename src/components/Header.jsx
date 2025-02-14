import React, { useEffect, useState } from "react";
import { FaPhone, FaClock, FaEnvelope, FaBars, FaWindowClose } from "react-icons/fa";
import logo from "./images/logo.jpg";
import { Link, useLocation } from "react-router-dom";
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

  const location = useLocation();
  const currentPath = location.pathname;

  return (
   <>
    <header style={{ backgroundImage: `url(${randomImage})` }}>
      <div className="header-div">
        <div className="header-icon-divs">
          <FaPhone className="fa-phone" />
          <p>
            Get in touch <br />
            <span>+27 74 929 4332</span>
          </p>
        </div>
        <div className="header-icon-divs">
          <FaEnvelope className="fa-envelope" />
          <p>
            Email us at <br />
            <span>mushuredavid@gmail.com</span>
          </p>
        </div>
        <div className="header-icon-divs">
          <FaClock className="fa-clock" />
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

            {currentPath === "/" ? (
              // Show all links except "Home" when on the home page
              <>
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
              </>
            ) : (
              // Show only "Home" link when on any other page
              <li className="lists">
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
   </>
  );
};

export default Header;
