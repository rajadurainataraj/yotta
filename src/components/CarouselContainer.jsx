import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import HoverContainer from './HoverContainer'
import customSoftware from '../assets/images/custom-software.png'
import digital from '../assets/images/digital-marketing.png'
import mobile from '../assets/images/mobile-application.png'
import websites from '../assets/images/websites.png'
import training from '../assets/images/traningandintern.png'
import uiux from '../assets/images/uiux.jpg'

import { HiOutlineArrowSmallLeft, HiArrowSmallRight } from 'react-icons/hi2'

import { motion } from 'framer-motion'
import custombg from '../assets/images/custom-soft-background.png'
import mobilebg from '../assets/images/mobile-background.png'
import internbg from '../assets/images/internship-background.png'
import webbg from '../assets/images/website-background.png'
import digitalbg from '../assets/images/digital-marketing-background.png'
import techbg from '../assets/images/texh-background.png'

const images = [
  {
    src: customSoftware,
    bgColor: '#828BC3',
    bgImg: custombg,
    title: 'Custom Software',
  },
  {
    src: digital,
    bgColor: '#A18088',
    bgImg: digitalbg,
    title: 'Digital Marketing',
  },
  {
    src: mobile,
    bgColor: '#8ACEFE',
    bgImg: mobilebg,
    title: 'Mobile Application',
  },
  { src: websites, bgColor: '#D3555C', bgImg: webbg, title: 'Websites' },
  {
    src: training,
    bgColor: '#8559B2',
    bgImg: internbg,
    title: 'Training & Internships',
  },
  { src: uiux, bgImg: techbg, bgColor: '#151515', title: 'UI/UX' },
]

const CarouselContainer = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)
  const [isHovering, setIsHovering] = useState(false)

  const handlePrev = () => {
    setDirection('right') // Set direction to "right" to slide in from the right
    setTimeout(() => {
      setDirection(null)
    }, 500) // Adjust the timeout to match the duration of your animation
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setDirection('left') // Set direction to "left" to slide in from the left
    setTimeout(() => {
      setDirection(null)
    }, 500) // Adjust the timeout to match the duration of your animation
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }
  // const handleNext = () => {
  //   setDirection("left");
  //   setIndex(index === images.length - 1 ? 0 : index + 1);
  // };

  return (
    <div
      className={`slide-carousel container-fluid d-flex align-items-center justify-content-center slide-${direction} text-left`}
    >
      <button
        className={`custom-corousel-btn carousel-btn-left text-center ${
          index === 0 && 'carousel-btns'
        }`}
        onClick={handlePrev}
      >
        <HiOutlineArrowSmallLeft
          style={{ fontSize: '30px', fontWeight: '600' }}
        />
      </button>

      <div
        className={`row d-flex custom-img-slider justify-content-center align-items-center ${
          direction === 'left'
            ? 'slideInLeft'
            : direction === 'right'
            ? 'slideInRight'
            : ''
        }`}
        style={{
          transition: 'transform 0.5s ease',
          // transform:
          //   direction === 'left'
          //     ? 'translateX(-100%)'
          //     : direction === 'right'
          //     ? 'translateX(100%)'
          //     : 'translateX(0)',
          // backgroundColor: images[index].bgColor,
          backgroundImage: `url(${images[index].bgImg})`,
          backgroundSize: 'contain', // Add this line
          backgroundPosition: 'center', // Optional: Center the image
          position: 'relative',
          backgroundRepeat: 'no-repeat',
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering && images[index].title === 'Custom Software' ? (
          <HoverContainer
            title={{ title: images[index].title }}
            direction={direction}
          />
        ) : isHovering && images[index].title === 'Digital Marketing' ? (
          <HoverContainer
            title={{ title: images[index].title }}
            direction={direction}
          />
        ) : isHovering && images[index].title === 'Mobile Application' ? (
          <HoverContainer
            title={{ title: images[index].title }}
            direction={direction}
          />
        ) : isHovering && images[index].title === 'Training & Internships' ? (
          <HoverContainer
            title={{ title: images[index].title }}
            direction={direction}
          />
        ) : isHovering && images[index].title === 'Websites' ? (
          <HoverContainer
            title={{ title: images[index].title }}
            direction={direction}
          />
        ) : isHovering && images[index].title === 'UI/UX' ? (
          <HoverContainer
            title={{ title: images[index].title }}
            direction={direction}
          />
        ) : null}

        <div className="col-3 d-flex align-items-center justify-content-center ">
          <h3
            className={`text-start custom-carousel-heading fw-bolder  ${
              index === images.length - 1 && 'text-white'
            } ps-4 `}
          >
            {!isHovering && images[index].title}
          </h3>
        </div>
        <div className="col-9 d-flex align-items-center justify-content-center">
          {!isHovering && (
            <Carousel
              activeIndex={index}
              onSelect={() => {}}
              interval={false} // Disable automatic slide transitions
              controls={false}
              indicators={false}
              className="custom-carousel-nothover"
            >
              {images.map((image, idx) => (
                <Carousel.Item key={idx}>
                  {/* <div className="d-flex justify-content-center align-items-center">
                    <img
                      className="d-block w-100 custom-sliding-img"
                      src={image.src}
                      alt={`Slide ${idx}`}
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div> */}
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </div>
      </div>

      <button
        className={`custom-corousel-btn carousel-btn-right text-center ${
          index === images.length - 1 && 'carousel-btns'
        }`}
        onClick={handleNext}
      >
        <HiArrowSmallRight style={{ fontSize: '30px', fontWeight: '600' }} />
      </button>
    </div>
  )
}

export default CarouselContainer
