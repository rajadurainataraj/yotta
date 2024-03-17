import { useState, useEffect } from "react";
import image1 from "../assets/images/Property1.jpg";
import image2 from "../assets/images/Property2.jpg";
import image3 from "../assets/images/Property3.jpg";
import image4 from "../assets/images/Property4.jpg";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % 4) + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getImageUrl = (imageNumber) => {
    switch (imageNumber) {
      case 1:
        return image1;
      case 2:
        return image2;
      case 3:
        return image3;
      case 4:
        return image4;
      default:
        return image1;
    }
  };

  return (
    <div
      className="slider-container"
      style={{
        backgroundImage: `url(${getImageUrl(currentImage)})`,
      }}
    ></div>
  );
};

export default ImageSlider;
