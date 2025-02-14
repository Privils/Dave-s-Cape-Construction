import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaWindowClose } from 'react-icons/fa';
const Flooring = () => {
     const images = [
        { src: require('../images/portfolioImages/tiles/tiles.jpg'), alt: 'process1' },
        { src: require('../images/portfolioImages/tiles/tiles-2.jpg'), alt: 'process2' },
        { src: require('../images/portfolioImages/tiles/tiles-3.jpg'), alt: 'process3', caption: 'End Product' },
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
            <button className="closebtn">
            <FaWindowClose id="close-arrow" onClick={closeModal} />
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

export default Flooring
