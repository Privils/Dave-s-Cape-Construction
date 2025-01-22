import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Roofing = () => {
      const images = [
        { src: require('../images/portfolioImages/roofingImages/scheming4.jpg'), alt: 'process1' },
        { src: require('../images/portfolioImages/roofingImages/scheming5.jpg'), alt: 'process2' },
        { src: require('../images/portfolioImages/roofingImages/scheming3.jpg'), alt: 'process3' },
        { src: require('../images/portfolioImages/roofingImages/scheming1.jpg'), alt: 'process4' },
        { src: require('../images/portfolioImages/roofingImages/scheming2.jpg'), alt: 'process8', caption: 'End Product' },
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
        <h1>Take a look at the construction process as we build this extension for our client</h1>
        <div className="services-grid">
          {images.map((image, index) => (
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
