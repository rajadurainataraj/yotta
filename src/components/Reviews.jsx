// const Reviews = () => {
//   return (
//     <section>
//       <div className="review-header text-center p-5">
//         Many companies, startups love our <span>products and services.</span>
//       </div>
//       <section></section>
//     </section>
//   );
// };

// export default Reviews;
import Styles from "./Card.module.css";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function Reviews({ cards, offset, showArrows, width, height, margin }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + cards.length) % cards.length);
  };

  const props3 = useSpring({
    transform: `translateX(-${currentSlide * (width + 20)}px)`,
    config: { mass: 5, tension: 350, friction: 40 },
  });

  return (
    <div style={{ width, height, margin }}>
      {showArrows && (
        <>
          <FaArrowAltCircleLeft
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              cursor: "pointer",
              zIndex: "1",
            }}
            onClick={prevSlide}
          />
          <FaArrowAltCircleRight
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              cursor: "pointer",
              zIndex: "1",
            }}
            onClick={nextSlide}
          />
        </>
      )}
      <animated.div className={Styles.cardContainer} style={props3}>
        {cards.map((card, index) => (
          <div key={index} className={Styles.card}>
            {card.content}
          </div>
        ))}
      </animated.div>
    </div>
  );
}

export default Reviews;
