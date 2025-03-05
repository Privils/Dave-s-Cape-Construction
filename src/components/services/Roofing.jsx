import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Roofing = () => {
      const images = [
        { src: require('../images/portfolioImages/roofingImages/scheming4.jpg'), alt: 'process1' },
        { src: require('../images/portfolioImages/roofingImages/scheming5.jpg'), alt: 'process2' },
        { src: require('../images/portfolioImages/roofingImages/scheming3.jpg'), alt: 'process3' },
        { src: require('../images/portfolioImages/roofingImages/scheming1.jpg'), alt: 'process4' },
        { src: require('../images/portfolioImages/roofingImages/scheming2.jpg'), alt: 'process8'},
        { src: require('../images/portfolioImages/roofingImages/WhatsApp Image 2025-03-05 at 20.58.54_0c1f5d7b.jpg'), alt: 'process9' },
        { src: require('../images/portfolioImages/roofingImages/WhatsApp Image 2025-03-05 at 20.58.54_0cb04450.jpg'), alt: 'process10' },
        { src: require('../images/portfolioImages/roofingImages/WhatsApp Image 2025-03-05 at 20.58.55_1f979d2a.jpg'), alt: 'process11' },
        { src: require('../images/portfolioImages/roofingImages/WhatsApp Image 2025-03-05 at 20.58.55_8d58c3d9.jpg'), alt: 'process13' },
        { src: require('../images/portfolioImages/roofingImages/WhatsApp Image 2025-03-05 at 20.58.55_11445771.jpg'), alt: 'process14' },
        { src: require('../images/portfolioImages/roofingImages/WhatsApp Image 2025-03-05 at 20.58.56_000f2132.jpg'), alt: 'process15' },
        { src: require('../images/portfolioImages/roofingImages/WhatsApp Image 2025-03-05 at 20.58.56_19fd18a9.jpg'), alt: 'process16' },
        { src: require('../images/portfolioImages/roofingImages/WhatsApp Image 2025-03-05 at 20.58.57_5c0cbf3f.jpg'), alt: 'process17' },
        { src: require('../images/portfolioImages/roofingImages/WhatsApp Image 2025-03-05 at 20.58.59_84f001f8.jpg'), alt: 'process18' },
        { src: require('../images/portfolioImages/roofingImages/WhatsApp Image 2025-03-05 at 20.59.00_2c50afd1.jpg'), alt: 'process19' },
        { src: require('../images/portfolioImages/roofingImages/WhatsApp Image 2025-03-05 at 20.59.00_5de4c5ca.jpg'), alt: 'process20' },
        { src: require('../images/portfolioImages/roofingImages/WhatsApp Image 2025-03-05 at 20.59.01_7d2310f9.jpg'), alt: 'process21' },
        { src: require('../images/portfolioImages/roofingImages/WhatsApp Image 2025-03-05 at 20.59.01_168a6f35.jpg'), alt: 'process22' },
        { src: require('../images/portfolioImages/roofingImages/WhatsApp Image 2025-03-05 at 20.59.01_a8713271.jpg'), alt: 'process23' },
        { src: require('../images/portfolioImages/roofingImages/WhatsApp Image 2025-03-05 at 20.59.02_6af1c46a.jpg'), alt: 'process24' },
        { src: require('../images/portfolioImages/roofingImages/WhatsApp Image 2025-03-05 at 20.59.02_fa822dd1.jpg'), alt: 'process25', caption: 'end' },
     
      ];
    
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
      };
      
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
      const goLeft = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      };
    
      const goRight = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      };
  return (
 <>
      <section className="additions">
      <h1>Explore the construction process as we repair the roof from the inside using a method called scheming. This extension is designed specifically for our client.</h1>
        <div className="services-grid">
          {images.slice(0, 5).map((image, index) => (
            <figure key={index} onClick={() => openModal(index)}>
              <img src={image.src} alt={image.alt} />
              <figcaption>
                <FaArrowRight className="arrow-right" />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="additions">
      <h1>Follow the construction process as we repair this garage roof and install a brand-new one.</h1>
        <div className="services-grid">
          {images.slice(6).map((image, index) => (
            <figure key={index} onClick={() => openModal(index)}>
              <img src={image.src} alt={image.alt} />
              <figcaption>
                <FaArrowRight className="arrow-right" />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <button className="close" onClick={closeModal}>
            X
          </button>
          <button className="arrow left" onClick={goLeft}>
            <FaArrowLeft />
          </button>
          <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} className="modal-image" />
          <figcaption className="modal-caption">
            {images[currentImageIndex].caption}
          </figcaption>
          <button className="arrow right" onClick={goRight}>
            <FaArrowRight />
          </button>
        </div>
      )}



    </>
  )
}

export default Roofing
