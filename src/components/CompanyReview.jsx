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
  const [direction, setDirection] = useState("right");
  const [autoSlide, setAutoSlide] = useState(true);

  const handlePrev = () => {
    const prevIndex =
      activeIndex === 0 ? ClientData.length - 1 : activeIndex - 1;
    setDirection("left");
    setTimeout(() => {
      setActiveIndex(prevIndex);
    }, 50); // Adjust the delay as needed
  };

  const handleNext = () => {
    const nextIndex =
      activeIndex === ClientData.length - 1 ? 0 : activeIndex + 1;
    setDirection("right");
    setTimeout(() => {
      setActiveIndex(nextIndex);
    }, 50); // Adjust the delay as needed
  };

  // useEffect(() => {
  //   let interval
  //   if (autoSlide) {
  //     interval = setInterval(() => {
  //       setActiveIndex((prevIndex) =>
  //         prevIndex === ClientData.length - 1 ? 0 : prevIndex + 1
  //       )
  //       setDirection((prevDirection) =>
  //         prevDirection === 'right' ? 'left' : 'right'
  //       )
  //     }, 6000)
  //   }

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [autoSlide])

  // if (counts > 0) return null

  useEffect(() => {
    let interval;

    const handleResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setAutoSlide(false); // Stop auto slide on desktop
      } else {
        setAutoSlide(true); // Start auto slide on mobile
      }
    };

    handleResize(); // Call it initially to set the correct state

    window.addEventListener("resize", handleResize); // Listen for resize events

    if (autoSlide) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === ClientData.length - 1 ? 0 : prevIndex + 1
        );
        setDirection((prevDirection) =>
          prevDirection === "right" ? "left" : "right"
        );
      }, 6000);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, [autoSlide]);

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="content-header h3 text-center mt-2">Reviews</div>
      <div className="carousel-inner">
        {ClientData.map((client, index) => (
          <div
            key={index}
            className={`carousel-items ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <div className="card my-4">
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
      <div className="carousel-control-prev" onClick={handlePrev}>
        <MdOutlineArrowBackIosNew />
      </div>
      <div className="carousel-control-next" onClick={handleNext}>
        <MdOutlineArrowForwardIos />
      </div>
      <style>{`
        /* Custom styles for the carousel */
        .carousel {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 1rem 0;
        }

        .carousel-inner {
          width: 100%;
        }

        .carousel-items {
          display: none;
        }

        .carousel-items.active {
          display: block;
          animation: ${
            direction === "right" ? "slideInRight" : "slideInLeft"
          } 0.5s forwards;
        }

        /* Custom styles for the cards */
        .card {
          width: 90%;
          margin: 0 auto;
          height: 230px;
       border-radius:10px;
         
        }

        /* Custom styles for the carousel arrows */
        .carousel-control-prev,
        .carousel-control-next {
          font-size: 2em;
          margin-top: 50px;
          display: none;
        cursor:pointer
        }
        .carousel-control-prev:hover,
        .carousel-control-next:hover {
          color: gray;
        }
        @media only screen and (max-width: 600px) { 
          .card {
            width: 90%;
            margin: 0 auto;
            height:auto;
         border-radius:10px;
           
          }
          
        }
        @media (min-width: 768px) {
          /* Show arrows on desktop view */
          .carousel-control-prev,
          .carousel-control-next {
            display: block;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            color: #333;
            padding: 10px;
            border-radius: 50%;
          }

          .carousel-control-prev {
            left: 10px;
          }

          .carousel-control-next {
            right: 10px;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CompanyReview;
