/* eslint-disable no-unused-vars */
/* eslint-disable no-unexpected-multiline */
import { useState, useEffect } from "react";
import { ClientData } from "./datas";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { count } from "./utils/globalState";
import { useRecoilState } from "recoil";
const CompanyReview = () => {
  const [counts, setCounts] = useRecoilState(count);
  const [activeIndex, setActiveIndex] = useState(0);

  // const handlePrev = () => {
  //   setActiveIndex(activeIndex === 0 ? ClientData.length - 1 : activeIndex - 1);
  // };
  const handlePrev = () => {
    const prevIndex =
      activeIndex === 0 ? ClientData.length - 1 : activeIndex - 1;
    document
      .querySelectorAll(".carousel-item")
      [activeIndex].classList.remove("active");
    document
      .querySelectorAll(".carousel-item")
      [prevIndex].classList.add("prev");
    setTimeout(() => {
      setActiveIndex(prevIndex);
      document
        .querySelectorAll(".carousel-item.prev")[0]
        .classList.remove("prev");
    }, 500); // Animation duration
  };

  // const handleNext = () => {
  //   setActiveIndex(activeIndex === ClientData.length - 1 ? 0 : activeIndex + 1);
  // };
  const handleNext = () => {
    const nextIndex =
      activeIndex === ClientData.length - 1 ? 0 : activeIndex + 1;
    document
      .querySelectorAll(".carousel-item")
      [activeIndex].classList.add("prev");
    document
      .querySelectorAll(".carousel-item")
      [nextIndex].classList.add("active");
    setTimeout(() => {
      document
        .querySelectorAll(".carousel-item.prev")[0]
        .classList.remove("prev");
      setActiveIndex(nextIndex);
    }, 500); // Animation duration
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === ClientData.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);
  if (counts > 0) return;
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="content-header h3 text-center mt-3">Reviews</div>
      <div className="carousel-inner">
        {ClientData.map((client, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <div className="card my-5">
              <div className="card-body">
                <h5 className="card-title">{client.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {client.company}
                </h6>
                <p className="card-text">{client.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="carousel-control-prev"
        // href="#carouselExampleControls"
        role="button"
        data-slide="prev"
        onClick={handlePrev}
      >
        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
        {/* <span className="sr-only"> */}
        <MdOutlineArrowBackIosNew />
        {/* </span> */}
      </div>
      <a
        className="carousel-control-next"
        // href="#carouselExampleControls"
        role="button"
        data-slide="next"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">
          <MdOutlineArrowForwardIos />
        </span>
      </a>
      <style></style>
    </div>
  );
};

export default CompanyReview;
