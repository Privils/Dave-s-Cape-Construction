import React, { useEffect } from "react";
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offest: 120,
      once: false,
    });
  }, []);

  return (
    <>
      <section className="footer" id="contact">
        <p className="moto">
          DCC-Projects <span>Building dreams, one break at a time</span>
        </p>

        <div className="footer-content">
          <div
            className="contact"
            data-aos="fade-up"
            data-aos-easing="ease-in"
            data-aos-duration="500"
          >
            <h1>Contact Us</h1>
            <p>
              <FaEnvelope /> mushuredavid@gmail.com
            </p>
            <p>
              <FaPhone /> +27 74 929 4332
            </p>
            <p>
              <a href="https://www.facebook.com/profile.php?id=61560452746935">
                <FaFacebook /> D-M-Projects
              </a>
            </p>
          </div>

          <div
            className="links"
            data-aos="fade-up"
            data-aos-easing="ease-in"
            data-aos-duration="700"
          >
            <h1>Quick Links</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="./Portfolio">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div
            className="footer-services"
            data-aos="fade-up"
            data-aos-easing="ease-in"
            data-aos-duration="1000"
          >
            <h1>Our Services</h1>
            <ul>
              <li>Quotations</li>
              <li>New Construction</li>
              <li>Renovations & Remodeling</li>
              <li>Additions & Extensions</li>
              <li>Property Maintenance</li>
              <li>Landscaping & Hardscaping</li>
              <li>Foundation & Concrete Services</li>
              <li>Roofing Services</li>
              <li>Drywall & Painting</li>
              <li>Flooring Installation & Repairs</li>
              <li>Windows & Doors</li>
            </ul>
          </div>
        </div>
        <div className="copywrite">
          &copy;2025{" "}
          <a href="https://www.privilswebdev.co.za/">PrivilsWebDev</a>. All
          Rights Reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
