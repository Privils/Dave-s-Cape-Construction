

import React from 'react' 
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook } from 'react-icons/fa'



const Footer = () => {
  return (
   <>
    <section className="footer">
      <p>DM-Projects <span>the dream maker for all your home needs</span></p>
      
      <div className="footer-content">
        <div className="contact">
          <h1>Contact Us</h1>
          <p><FaEnvelope /> contact@compan.co.za</p>
          <p><FaPhone /> +27 889 5624 527</p>
          <p><FaInstagram /> michaels_562@twed</p>
          <p><FaFacebook /> Michael-john@facenool</p>
        </div>

        <div className="links">
          <h1>Quick Links</h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-services">
          <h1>Our Services</h1>
          <ul>
            <li>New Construction</li>
            <li>Renovations & Remodeling</li>
            <li>Additions & Extensions</li>
            <li>Property Maintenance</li>
            <li>Landscaping & Hardscaping</li>
            <li>Foundation & Concrete Services</li>
            <li>Demolition Services</li>
            <li>Roofing Services</li>
            <li>Plumbing & Electrical Services</li>
            <li>Drywall & Painting</li>
            <li>Flooring Installation & Repairs</li>
            <li>Windows & Doors</li>
            <li>Handyman Services</li>
            <li>Project Management & Consultation</li>
            <li>Cleaning Services</li>
          </ul>
        </div>

      </div>
    </section>
   </>
  )
}

export default Footer
