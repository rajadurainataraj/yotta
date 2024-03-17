/* eslint-disable react/prop-types */
// CarouselComponent.js
import { useEffect } from "react";
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";

export default function CarouselComponent({
  cards,
  activeIndex,
  setActiveIndex,
  height,
  width,
  margin,
  offset,
  showArrows,
}) {
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "ArrowLeft") {
        setActiveIndex(
          (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
        );
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [cards.length, setActiveIndex]);

  return (
    <div
      style={{
        width: width,
        height: height,
        margin: margin,
        position: "relative",
        border: "1px solid red",
      }}
    >
      <Carousel
        slides={cards}
        goToSlide={activeIndex}
        offsetRadius={offset}
        showNavigation={showArrows}
        animationConfig={config.gentle}
        onChange={(index) => setActiveIndex(index)}
      />
    </div>
  );
}
