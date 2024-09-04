import React, { useEffect, useState } from 'react';
import './Slideshow.css'; // Include your CSS for styling

const images = [
  './src/assets/react.svg',
  'image2.jpg',
  'image3.jpg',
  // Add paths to your images here
];

const Slideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <div
      className="slideshow"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      {/* Other content can go here */}
    </div>
  );
};

export default Slideshow;
