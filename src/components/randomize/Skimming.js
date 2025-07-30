// utils/images.js
const skimmingImages = [
  { src: require("../images/portfolioImages/roofingImages/scheming1.jpg"), alt: 'process 1' },
  { src: require("../images/portfolioImages/roofingImages/scheming2.jpg"), alt: "process 2" },
  { src: require("../images/portfolioImages/roofingImages/scheming3.jpg"), alt: "process 3" },
  { src: require("../images/portfolioImages/roofingImages/scheming4.jpg"), alt: "process 4" },
  { src: require("../images/portfolioImages/roofingImages/scheming5.jpg"), alt: "process 5" },
];

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * skimmingImages.length);
  return skimmingImages[randomIndex];
};




const extensionImages = [
  { src: require("../images/portfolioImages/additons/entertainment1.jpg"), alt: 'process 1' },
  { src: require("../images/portfolioImages/additons/entertainment2.jpg"), alt: "process 2" },
  { src: require("../images/portfolioImages/additons/entertainment4.jpg"), alt: "process 3" },
  { src: require("../images/portfolioImages/additons/entertainment5.jpg"), alt: "process 4" },
  { src: require("../images/portfolioImages/additons/entertainment6.jpg"), alt: 'process 5' },
  { src: require("../images/portfolioImages/additons/entertainment7.jpg"), alt: 'process 6' },
  { src: require("../images/portfolioImages/additons/extend.jpg"), alt: 'process 7' },
  { src: require("../images/portfolioImages/additons/extend1.jpg"), alt: 'process 8' },
  { src: require("../images/portfolioImages/additons/extend2.jpg"), alt: 'process 9' },
  { src: require("../images/portfolioImages/additons/extend3.jpg"), alt: 'process 10' },
  { src: require("../images/portfolioImages/additons/extend4.jpg"), alt: 'process 11' },
    { src: require("../images/portfolioImages/additons/extend5.jpg"), alt: 'process 12' },
      { src: require("../images/portfolioImages/additons/extend6.jpg"), alt: 'process 13' },
        { src: require("../images/portfolioImages/additons/extend7.jpg"), alt: 'process 14' },
          { src: require("../images/portfolioImages/additons/extend8.jpg"), alt: 'process 15' },
];

export const getRandomExtensionImage = () => {
  const randomExtentIndex = Math.floor(Math.random() * extensionImages.length);
  return extensionImages[randomExtentIndex];
};


const roofingImages = [
  { src: require("../images/portfolioImages/roofingImages/roof8.jpg"), alt: 'process 1' },
  { src: require("../images/portfolioImages/roofingImages/roof9.jpg"), alt: "process 2" },
  { src: require("../images/portfolioImages/roofingImages/roof11.jpg"), alt: "process 3" },
  { src: require("../images/portfolioImages/roofingImages/roof13.jpg"), alt: "process 4" },
  { src: require("../images/portfolioImages/roofingImages/roof15.jpg"), alt: 'process 5' },
  { src: require("../images/portfolioImages/roofingImages/roof16.jpg"), alt: 'process 6' },
  { src: require("../images/portfolioImages/roofingImages/roof20.jpg"), alt: 'process 7' },
  { src: require("../images/portfolioImages/roofingImages/roof21.jpg"), alt: 'process 8' },
];

export const getRandomRoofingImage = () => {
  const randomRoofIndex = Math.floor(Math.random() * roofingImages.length);
  return roofingImages[randomRoofIndex];
};


const tilingImages = [
  { src: require("../images/portfolioImages/tiles/tiles.jpg"), alt: 'process 1' },
  { src: require("../images/portfolioImages/tiles/tiles-2.jpg"), alt: "process 2" },
  { src: require("../images/portfolioImages/tiles/tiles-3.jpg"), alt: "process 3" },
  { src: require("../images/portfolioImages/tiles/tiles4.jpg"), alt: "process 4" },
  { src: require("../images/portfolioImages/tiles/tiles5.jpg"), alt: 'process 5' },
  { src: require("../images/portfolioImages/tiles/tiles6.jpg"), alt: 'process 6' },
  { src: require("../images/portfolioImages/tiles/tiles7.jpg"), alt: 'process 7' },
  { src: require("../images/portfolioImages/tiles/tiles8.jpg"), alt: 'process 8' },
];

export const getRandomTileImage = () => {
  const randomTileIndex = Math.floor(Math.random() * tilingImages.length);
  return tilingImages[randomTileIndex];
};

const renovationsImages = [
  { src: require("../images/portfolioImages/tiles/tiles.jpg"), alt: 'process 1' },
  { src: require("../images/portfolioImages/tiles/tiles-2.jpg"), alt: "process 2" },
  { src: require("../images/portfolioImages/tiles/tiles-3.jpg"), alt: "process 3" },
  { src: require("../images/portfolioImages/tiles/tiles4.jpg"), alt: "process 4" },
  { src: require("../images/portfolioImages/tiles/tiles5.jpg"), alt: 'process 5' },
  { src: require("../images/portfolioImages/tiles/tiles6.jpg"), alt: 'process 6' },
  { src: require("../images/portfolioImages/tiles/tiles7.jpg"), alt: 'process 7' },
  { src: require("../images/portfolioImages/tiles/tiles8.jpg"), alt: 'process 8' },
    { src: require("../images/portfolioImages/additons/extend.jpg"), alt: 'process 9' },
  { src: require("../images/portfolioImages/additons/extend1.jpg"), alt: 'process 10' },
  { src: require("../images/portfolioImages/additons/extend2.jpg"), alt: 'process 11' },
  { src: require("../images/portfolioImages/additons/extend3.jpg"), alt: 'process 12' },
  { src: require("../images/portfolioImages/additons/extend4.jpg"), alt: 'process 13' },
    { src: require("../images/portfolioImages/additons/extend5.jpg"), alt: 'process 14' },
     
];

export const getRandomRenovationsImage = () => {
  const randomRenovationsIndex = Math.floor(Math.random() *  renovationsImages.length);
  return  renovationsImages[randomRenovationsIndex];
};
