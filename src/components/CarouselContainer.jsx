import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HoverContainer from "./HoverContainer";
import customSoftware from "../assets/images/custom-software.png";
import digital from "../assets/images/digital-marketing.png";
import mobile from "../assets/images/mobile-application.png";
import websites from "../assets/images/websites.png";
import training from "../assets/images/training&internships.png";
import uiux from "../assets/images/uiux.jpg";

const images = [
  { src: customSoftware, bgColor: "#828BC3", title: "Custom Software" },
  { src: digital, bgColor: "#A18088", title: "Digital Marketing" },
  { src: mobile, bgColor: "#8ACEFE", title: "Mobile Application" },
  { src: websites, bgColor: "#D3555C", title: "Websites" },
  { src: training, bgColor: "#8559B2", title: "Training & Internships" },
  { src: uiux, bgColor: "#151515", title: "UI/UX" },
];

const CarouselContainer = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const handlePrev = () => {
    setDirection("right");
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const handleNext = () => {
    setDirection("left");
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div
      className={`slide-carousel container-fluid d-flex align-items-center justify-content-center slide-${direction} text-left`}
      style={{ display: "flex", alignItems: "center" }}
    >
      <button
        className={`custom-corousel-btn text-center ${
          index === 0 && "carousel-btns"
        }`}
        onClick={handlePrev}
        style={{ marginRight: "60px" }}
      >
        <FaArrowLeft />
      </button>

      <div
        className="row"
        style={{
          width: "600px",
          height: "390px",
          backgroundColor: images[index].bgColor,
          position: "relative",
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering && images[index].title === "Custom Software" ? (
          <HoverContainer title={{ title: images[index].title }} />
        ) : isHovering && images[index].title === "Digital Marketing" ? (
          <HoverContainer title={{ title: images[index].title }} />
        ) : isHovering && images[index].title === "Mobile Application" ? (
          <HoverContainer title={{ title: images[index].title }} />
        ) : isHovering && images[index].title === "Training & Internships" ? (
          <HoverContainer title={{ title: images[index].title }} />
        ) : isHovering && images[index].title === "Websites" ? (
          <HoverContainer title={{ title: images[index].title }} />
        ) : isHovering && images[index].title === "UI/UX" ? (
          <HoverContainer title={{ title: images[index].title }} />
        ) : null}
        <div className="col-3 d-flex align-items-center">
          <h3
            className={`text-start custom-carousel-heading fw-bolder  ${
              index === images.length - 1 && "text-white"
            } ps-4 `}
          >
            {!isHovering && images[index].title}
          </h3>
        </div>
        <div className="col-9 d-flex align-items-center justify-content-start">
          {!isHovering && (
            <Carousel
              activeIndex={index}
              onSelect={() => {}}
              interval={null}
              controls={false}
              indicators={false}
              style={{ width: "469px", height: "297px" }}
            >
              {images.map((image, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100"
                    src={image.src}
                    alt={`Slide ${idx}`}
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "contain",
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </div>
      </div>

      <button
        className={`custom-corousel-btn text-center ${
          index === images.length - 1 && "carousel-btns"
        }`}
        onClick={handleNext}
        style={{ marginLeft: "50px" }}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default CarouselContainer;
