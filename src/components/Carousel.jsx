import React, { useState } from "react";
import "./Carousel.css";

const data = [
  {
    title: "Harini",
    company: "CEO, Hashigo Technologies",
    review:
      "Working with YWS has been an absolute pleasure Their dedication, professionalism, and attention to detail have truly impressed me. I highly recommend YWS team for any project and look forward to collaborating with them again in the future!",
  },
  {
    title: "Bala",
    company: "CEO, Enterot",
    review:
      "They are providing good services in web development in enterprise level projects. Timely delivery of products with no compromise to quality.Recommendable for developing web apps in budget!",
  },
  {
    title: "sathish",
    company: "CEO, Test Your Matrics",
    review:
      "Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend this team for startups, who want to spend more time on customers instead of technical developments.",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {data.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
            style={{
              transform: `translateX(${(index - activeIndex) * 100}%)`,
              opacity: index === activeIndex ? 1 : 0,
            }}
          >
            <div className="card">
              <h3>{item.title}</h3>
              <p>{item.company}</p>
              <p>{item.review}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
