import React, { useEffect, useState } from "react";
import { getRandomImage } from "./randomize/Skimming";
import { getRandomExtensionImage } from "./randomize/Skimming";
import { getRandomRoofingImage } from "./randomize/Skimming";
import { getRandomTileImage } from "./randomize/Skimming";

const Portfolio = () => {
  const [image, setImage] = useState(null);
  const [extendImage, setExtentImage] = useState(null);
  const [roofImage, setRoofImage] = useState(null);
  const [tilesImage, setTilesImage] = useState(null);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setImage(getRandomImage());
        setExtentImage(getRandomExtensionImage());
        setRoofImage(getRandomRoofingImage());
        setTilesImage(getRandomTileImage());
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="skeeming">
        <div className="skeeming-cont">
          <figure>
            {image && (
              <img
                src={image.src}
                alt={image.alt}
                className={`fade-image ${fade ? "visible" : "hidden"}`}
              />
            )}
          </figure>
          <div className="what-is-skeeming">
            <h1>what is skimming ?</h1>
            <p>
              Skimming in construction is the process of applying a thin, smooth
              layer of <span>finishing plaster</span> over <span>walls</span> or
              <span>ceilings</span> to create a flat, even surface ready for
              <span>painting</span> or <span>decorating</span>. This process
              helps to cover <span>imperfections</span>, <span>cracks</span>, or
              <span>rough textures</span> on the wall, ensuring a
              <span>professional</span>, <span>clean finish</span> for both
              <span>new builds</span> and <span>renovation projects</span>.
            </p>

            <h3> How We Gets the Job Done:</h3>
            <p>
              At <span>DCC Services and Maintenance</span>, we start the{" "}
              <span>skimming process</span> by carefully <span>inspecting</span>{" "}
              and <span>preparing the surface</span> to ensure it is free of{" "}
              <span>dust</span>, <span>loose materials</span>, or{" "}
              <span>oils</span> that may affect the plaster's grip. We then
              apply a <span>bonding agent</span> if necessary, ensuring the
              plaster <span>adheres properly</span> to the wall or ceiling. Our
              team mixes the <span>skim plaster</span> to the correct
              consistency and begins applying the first thin coat using{" "}
              <span>professional plastering trowels</span>, working
              systematically to ensure every area is <span>covered evenly</span>
              .
            </p>

            <p>
              Once the first coat is applied, we allow it to set slightly before
              applying a <span>second thin layer</span> for a perfectly{" "}
              <span>smooth finish</span>. Our team uses{" "}
              <span>precision techniques</span> to feather edges and eliminate
              any visible lines, creating a <span>seamless surface</span> across
              the entire wall or ceiling. After the plaster has dried, we
              lightly sand any <span>minor imperfections</span>, leaving the
              surface <span>clean</span>, <span>smooth</span>, and ready for
              <span>painting</span>, ensuring that our clients receive a{" "}
              <span>high-quality</span>,<span>durable finish</span> that
              enhances the <span>beauty of their spaces</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="extension">
        <div className="skeeming-cont">
          <div className="what-is-skeeming">
            <h1>home Additions & extensions</h1>
            <p>
              <span>Home additions and extensions</span> involve expanding your
              existing living space to create more room for your family,
              increase your home's functionality, and enhance its overall value.
              This process can include adding extra <span>bedrooms</span>,{" "}
              <span>living areas</span>, or <span>entertainment spaces</span>,
              allowing homeowners to customize their homes according to their
              evolving needs while avoiding the hassle of moving to a new
              property.
            </p>

            <p>
              At <span>DCC Services and Maintenance</span>, we manage your home
              addition or extension project with a clear and efficient process,
              starting with a detailed
              <span>site assessment</span> and <span>client consultation</span>{" "}
              to understand your vision and space requirements. Our team handles
              all necessary <span>planning</span>,<span>design work</span>, and{" "}
              <span>municipal approvals</span>, ensuring your project is
              compliant with local building regulations and completed within the
              agreed timelines, while prioritizing safety and quality
              workmanship.
            </p>

            <p>
              During the construction phase, our skilled team carefully executes
              the
              <span>foundation work</span>, <span>bricklaying</span>, and{" "}
              <span>roofing</span>, while seamlessly integrating the new space
              with your existing home. We handle <span>electrical</span>,
              <span>plumbing</span>, and <span>finishing work</span> to ensure
              your new addition is fully functional and aesthetically pleasing.
              Once complete, we conduct a final
              <span>quality check</span> and <span>client walkthrough</span> to
              guarantee your satisfaction, leaving you with a beautifully
              expanded living space that enhances the comfort and value of your
              home.
            </p>
          </div>
          <figure>
            {extendImage && (
              <img
                src={extendImage.src}
                alt={extendImage.alt}
                className={`fade-image ${fade ? "visible" : "hidden"}`}
              />
            )}
          </figure>
        </div>
      </section>

      <section className="roofing-services">
        <div className="skeeming-cont">
          <figure>
            {roofImage && (
              <img
                src={roofImage.src}
                alt={roofImage.alt}
                className={`fade-image ${fade ? "visible" : "hidden"}`}
              />
            )}
          </figure>
          <div className="what-is-skeeming">
            <h1>roofing services</h1>
            <p>
              <span>Roofing</span> is a critical part of any building project,
              providing essential protection against the elements while
              enhancing your home's overall appearance and value. A
              well-installed roof helps maintain the structural integrity of
              your property, improves <span>energy efficiency</span>, and
              ensures the safety and comfort of your living spaces. Whether it’s
              a new build, renovation, or repair, quality roofing is an
              investment in your home’s longevity.
            </p>

            <p>
              At <span>DCC Services and Maintenance</span>, we start the roofing
              process with a detailed <span>roof inspection</span> to assess the
              condition of your existing structure and to determine the best
              materials and design for your project. Our team assists you in
              selecting <span>roofing materials</span> such as
              <span>IBR sheets</span>, <span>corrugated sheets</span>, or{" "}
              <span>roof tiles</span> to match your budget and style preferences
              while ensuring durability and weather resistance. We handle all
              necessary <span>preparations</span> to ensure your roof structure
              can support the new installation.
            </p>

            <p>
              During installation, our skilled team carefully completes the
              <span>roof framing</span> if required, followed by the precise
              laying and securing of your chosen roofing materials. We ensure{" "}
              <span>flashing</span>,<span>waterproofing</span>, and proper{" "}
              <span>alignment</span> to prevent leaks and ensure a neat finish.
              Once complete, we conduct a thorough
              <span>quality check</span> and <span>client walkthrough</span> to
              ensure your satisfaction, leaving you with a strong, reliable, and
              visually appealing roof that protects and enhances your home.
            </p>
          </div>
        </div>
      </section>
      <section className="renovations">
        <div className="skeeming-cont">
          <div className="what-is-skeeming">
            <h1>renovations</h1>
            <p>
              <span>Renovations</span> involve upgrading and improving existing
              spaces to enhance functionality, comfort, and the overall
              appearance of your home or business. Whether it’s modernizing
              outdated interiors, repairing damaged areas, or creating an
              entirely new look, renovations help increase your property’s{" "}
              <span>value</span> while reflecting your personal style and needs.
              From minor touch-ups to complete transformations, quality
              renovations bring new life to your spaces.
            </p>

            <p>
              At <span>DCC Services and Maintenance</span>, we begin your
              renovation project with a thorough <span>site assessment</span>{" "}
              and <span>client consultation</span> to understand your vision,
              budget, and timeline. Our team develops a clear
              <span>renovation plan</span> tailored to your goals, sourcing
              quality materials and providing expert advice on design, layout,
              and finishes to align with your expectations while ensuring
              practicality and durability.
            </p>

            <p>
              During the renovation process, we handle <span>repairs</span>,{" "}
              <span>installations</span>, and <span>finishing work</span> with
              precision, maintaining a clean and organized work environment
              throughout. Our skilled team focuses on delivering a{" "}
              <span>high-quality finish</span>, ensuring your renovated space is
              functional, beautiful, and ready for use. We complete the project
              with a final <span>quality inspection</span> and{" "}
              <span>client walkthrough</span>
              to guarantee your satisfaction.
            </p>
          </div>
          <figure>
            <img
              src={require("./images/portfolioImages/roofingImages/scheming4.jpg")}
              alt=""
            />
          </figure>
        </div>
      </section>

      <section className="tiling">
        <div className="skeeming-cont">
          <figure>
            {tilesImage && (
              <img
                src={tilesImage.src}
                alt={tilesImage.alt}
                className={`fade-image ${fade ? "visible" : "hidden"}`}
              />
            )}
          </figure>
          <div className="what-is-skeeming">
            <h1>tiling</h1>
            <p>
              <span>Tiling</span> is the process of installing tiles on floors,
              walls, or other surfaces to create a durable, easy-to-clean, and
              aesthetically pleasing finish in your home or business. Tiles come
              in a variety of
              <span>styles </span>, <span>sizes</span>, and{" "}
              <span>materials</span>, including
              <span>ceramic</span>, <span>porcelain</span>, and{" "}
              <span>natural stone</span>, providing versatile design options for
              bathrooms, kitchens, living areas, and outdoor spaces.
            </p>

            <p>
              At <span>DCC Services and Maintenance</span>, we begin the tiling
              process by assessing your space and helping you select the right{" "}
              <span>tile type</span> and
              <span>layout design</span> to match your aesthetic and functional
              needs. We prepare the surface by ensuring it is clean, level, and
              primed for the installation, which is essential for a long-lasting
              and neat tiling finish.
            </p>

            <p>
              Our team then carefully applies the <span>adhesive</span> and
              positions each tile precisely to ensure <span>even spacing</span>{" "}
              and <span>alignment</span> throughout the area. Once the tiles are
              in place, we apply <span>grouting</span> and seal the surfaces
              where needed to protect against moisture and stains. We complete
              the process with a thorough <span>clean-up</span> and{" "}
              <span>quality inspection</span> to ensure your tiled surfaces are
              durable, attractive, and ready to enhance the beauty of your
              space.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
