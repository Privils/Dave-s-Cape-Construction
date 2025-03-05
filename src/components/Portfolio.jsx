import React from "react";
import text from "./services/Additions";

const Portfolio = () => {
  return (
    <>
      <h1 className="portfolio-header">welcome to D-M-Projects-portfolio</h1>
      <section className="services" id="services">
        <div
          className="services-grid"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <figure>
            <a href="./services/Additions">
              <img
                src={require("./images/images (1).jpeg")}
                alt="Additions & Extensions"
              />
            </a>
            <figcaption>Additions & Extensions</figcaption>

            <div className="btn-button">
              <button class="btn view-btn">
                <a href="./services/Additions">view projects</a>
              </button>
            </div>
          </figure>
          <figure>
            <img
              src={require("./images/Maintenance.jpeg")}
              alt="Property Maintenance"
            />
            <figcaption>Property Maintenance</figcaption>
            <div className="btn-button">
              <button className="btn view-btn">
                <a href="./services/Maintainance">view</a>
              </button>
            </div>
          </figure>
          <figure>
            <img
              src={require("./images/12-Roofing-Services-Offered-throughout.jpg")}
              alt="Roofing Services"
            />
            <figcaption>Roofing Services</figcaption>
            <div className="btn-button">
              <button class="btn view-btn">
                <a href="./services/Roofing">view projects</a>
              </button>
            </div>
          </figure>
          <figure>
            <img
              src={require("./images/Feature-House-renovation-checklist.jpg")}
              alt="Renovations & Remodeling"
            />
            <figcaption>Renovations & Remodeling</figcaption>
            <div className="btn-button">
              <button className="btn view-btn">
                <a href="./services/Renovations">view</a>
              </button>
            </div>
          </figure>

          <figure>
            <img
              src={require("./images/portfolioImages/groundup.jpg")}
              alt="Additions & Extensions"
            />
            <figcaption>New Home Construction</figcaption>
          </figure>
          <figure>
            <img
              src={require("./images/portfolioImages/brickwork.jpg")}
              alt="Additions & Extensions"
            />
            <figcaption>Masonry & Brickwork</figcaption>
          </figure>
          <figure>
            <a href="./services/Flooring">
              <img
                src={require("./images/portfolioImages/tiling_over_tiles.jpg")}
                alt="Additions & Extensions"
              />
            </a>

            <figcaption>Flooring & Tiling</figcaption>
            <div className="btn-button">
              <button className="btn view-btn">
                <a href="./services/Flooring">view</a>
              </button>
            </div>
          </figure>
          <figure>
            <a href="./services/Roofing">
              <img
                src={require("./images/portfolioImages/Tiled-Roof-Repairs-2.jpg")}
                alt="Additions & Extensions"
              />
            </a>
            <figcaption> Roof, Wall & Structural Repairs</figcaption>
            <div className="btn-button">
              <button class="btn view-btn">
                <a href="./services/Roofing">view projects</a>
              </button>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
