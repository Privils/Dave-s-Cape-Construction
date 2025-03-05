import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft, FaWindowClose } from 'react-icons/fa';

const Renovations = () => {
    
      const images = [
        { src: require('../images/portfolioImages/additons/WhatsApp Image 2025-03-05 at 20.57.22_c58264f1.jpg'), alt: 'process1' },
        { src: require('../images/portfolioImages/additons/WhatsApp Image 2025-03-05 at 20.57.23_81dddbbe.jpg'), alt: 'process2' },
        { src: require('../images/portfolioImages/additons/WhatsApp Image 2025-03-05 at 20.57.24_1227c905.jpg'), alt: 'process3' },
        { src: require('../images/portfolioImages/additons/WhatsApp Image 2025-03-05 at 20.57.24_ec5b366f.jpg'), alt: 'process4' },
        { src: require('../images/portfolioImages/additons/WhatsApp Image 2025-03-05 at 20.57.25_62584fd8.jpg'), alt: 'process5' },
        { src: require('../images/portfolioImages/additons/WhatsApp Image 2025-03-05 at 20.57.25_b86ba71d.jpg'), alt: 'process6' },
        { src: require('../images/portfolioImages/additons/WhatsApp Image 2025-03-05 at 20.57.26_9c3fbc2b.jpg'), alt: 'process7' },
        { src: require('../images/portfolioImages/additons/WhatsApp Image 2025-03-05 at 20.57.26_9c3fbc2b.jpg'), alt: 'process8' },
        { src: require('../images/portfolioImages/additons/WhatsApp Image 2025-03-05 at 20.57.26_6628e907.jpg'), alt: 'process9' },
        { src: require('../images/portfolioImages/additons/WhatsApp Image 2025-03-05 at 20.57.26_a4e12e2a.jpg'), alt: 'process10',  caption: 'end' },
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

export default Renovations
