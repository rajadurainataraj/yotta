import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";

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

const ImageCarouselComponent = () => {
  const [goToSlide, setGoToSlide] = useState(0);

  const slides = data.map((item, index) => ({
    key: uuidv4(),
    content: (
      <Card
        key={uuidv4()}
        style={{
          width: "56rem",
          margin: "0 auto",
          padding: "50px",
          background: index === goToSlide ? "white" : "red", // Change background color based on index
        }}
      >
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {item.company}
          </Card.Subtitle>
          <Card.Text>{item.review}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    ),
    onClick: () => setGoToSlide(index),
  }));

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <button
        className="navigation-buttons"
        onClick={() => setGoToSlide(goToSlide - 1)}
        style={{ width: "100px", height: "50px" }}
      >
        Prev
      </button>
      <div
        style={{
          width: "80%",
          height: "500px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={10}
          showNavigation={false}
          animationConfig={config.default}
        />
      </div>
      <button
        style={{ width: "100px", height: "50px" }}
        onClick={() => setGoToSlide(goToSlide + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default ImageCarouselComponent;
