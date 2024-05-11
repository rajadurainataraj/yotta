import { useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";
import c4 from "../assets/images/c4.png";
import c5 from "../assets/images/c5.png";
// import c6 from "../assets/images/rainbow.png";
import c7 from "../assets/images/hashigo.png";

const images = [c1, c2, c3, c4, c5, c7];

const OurClients = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  const addAnimation = (scrollers) => {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  };

  return (
    <section className="container-fluid custom-client-container">
      <Container fluid className="py-4 ">
        <h3 className="content-header text-center pb-3 ">Our Clients</h3>
        <Row>
          <Col className="custom-scroll-infinity">
            <div className="scroller" data-direction="left" data-speed="medium">
              <div className="scroller__inner">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 2}`}
                    className="me-5 custom-infyscroll-img"
                    height="70px"
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
        <div className="custom-clients d-flex justify-content-center align-items-center ">
          <p className="h4 text-center pt-4">
            Many companies, startups love our <span>products and services</span>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default OurClients;
