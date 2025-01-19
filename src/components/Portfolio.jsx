import React from 'react'
import image from './images/12-Roofing-Services-Offered-throughout.jpg'
import image1 from './images/Feature-House-renovation-checklist.jpg'
import image2 from './images/Maintenance.jpeg'
import image3 from './images/images (1).jpeg'
import image5 from './images/portfolioImages/Tiled-Roof-Repairs-2.jpg'
import image6 from './images/portfolioImages/brickwork.jpg'
import image7 from './images/portfolioImages/groundup.jpg'
import image8 from './images/portfolioImages/tiling_over_tiles.jpg'
import text from './services/Additions'

const Portfolio = () => {
  return (
   <>
   <h1 className='portfolio-header'>welcome to DM-Projects-portfolio</h1>
   <section className="services" id="services">
  <div className="services-grid">
    <figure>
      <a href="./services/Additions">
      <img src={image3} alt="Additions & Extensions" />
      </a>
      <figcaption>Additions & Extensions</figcaption>
    </figure>
    <figure>
      <img src={image2} alt="Property Maintenance" />
      <figcaption>Property Maintenance</figcaption>
    </figure>
    <figure>
      <img src={image} alt="Roofing Services" />
      <figcaption>Roofing Services</figcaption>
    </figure>
    <figure>
      <img src={image1} alt="Renovations & Remodeling" />
      <figcaption>Renovations & Remodeling</figcaption>
    </figure>



    <figure>
      <img src={image7} alt="Additions & Extensions" />
      <figcaption>New Home Construction</figcaption>
    </figure>
    <figure>
      <img src={image6} alt="Additions & Extensions" />
      <figcaption>Masonry & Brickwork</figcaption>
    </figure>
    <figure>
      <img src={image8} alt="Additions & Extensions" />
      <figcaption>Flooring & Tiling</figcaption>
    </figure>
    <figure>
      <img src={image5} alt="Additions & Extensions" />
      <figcaption> Roof, Wall & Structural Repairs</figcaption>
    </figure>
  
    
  </div>
</section>
   </>
  )
}

export default Portfolio
