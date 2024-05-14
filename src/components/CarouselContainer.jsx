/* eslint-disable no-unused-vars */
import { useMemo, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import arrowIcon from '../assets/images/arrow-icon.png'

// import HoverContainer from './HoverContainer'
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
import { allData } from './datas'
import { useNavigate } from 'react-router-dom'
console.log(allData)

const images = [
  {
    src: customSoftware,
    bgColor: '#828BC3',
    bgImg: custombg,
    title: 'Custom Software',
    urlTitle: 'customsoftware',
  },
  {
    src: digital,
    bgColor: '#A18088',
    bgImg: digitalbg,
    title: 'Digital Marketing',
    urlTitle: 'digitalmarketing',
  },
  {
    src: mobile,
    bgColor: '#8ACEFE',
    bgImg: mobilebg,
    title: 'Mobile Application',
    urlTitle: 'mobileapplication',
  },
  {
    src: websites,
    bgColor: '#D3555C',
    bgImg: webbg,
    title: 'Websites',
    urlTitle: 'websites',
  },
  {
    src: training,
    bgColor: '#8559B2',
    bgImg: internbg,
    title: 'Training & Internships',
    urlTitle: 'trainingandinternships',
  },
  {
    src: uiux,
    bgImg: techbg,
    bgColor: '#151515',
    title: 'UI/UX',
    urlTitle: 'uiuxdesign',
  },
]

const CarouselContainer = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isSettling, setIsSettling] = useState(false)
  const navigate = useNavigate()
  const data = allData.find((item) => item.id === images[index].urlTitle)
  const handlePrev = () => {
    setDirection('left')
    setIsSettling(true)
    setTimeout(() => {
      setDirection(null)
      setIsSettling(false)
    }, 500) // Adjust the timeout to match the duration of your animation
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setDirection('right')
    setIsSettling(true)
    setTimeout(() => {
      setDirection(null)
      setIsSettling(false)
    }, 500) // Adjust the timeout to match the duration of your animation
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const moreContent = () => {
    navigate('/services/' + images[index].urlTitle)
  }

  // const title = useMemo(() => images[index].title, [index])
  return (
    <div
      className={`slide-carousel container-fluid d-flex align-items-center justify-content-center slide-${direction} text-left`}
      style={{ overflow: isSettling ? 'hidden' : 'visible' }}
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
          // transition: 'transform 0.5s ease',
          backgroundImage: `url(${images[index].bgImg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          position: 'relative',
          backgroundRepeat: 'no-repeat',
          cursor: isSettling ? 'default' : 'pointer',
        }}
        // onMouseEnter={() => !isSettling && setIsHovering(true)}
        // onMouseLeave={() => !isSettling && setIsHovering(false)}
      >
        <div className="col-3 d-flex align-items-center ">
          <h3
            className={`text-start custom-carousel-heading fw-bolder ${
              index === images.length - 1 && 'text-white'
            } ps-4 `}
          >
            {images[index].title}
          </h3>
        </div>
        <div className="col-9 d-flex align-items-center justify-content-center">
          {!isHovering && (
            <Carousel
              activeIndex={index}
              onSelect={() => {}}
              interval={false}
              controls={false}
              indicators={false}
              className="custom-carousel-nothover"
            ></Carousel>
          )}
        </div>
        <div className="c-overlay">
          <div className="service-headers text-black p-4">
            {images[index].title}
          </div>
          <section className="">
            <div className="">
              <p className="service-paras-home p px-4">{data?.content}</p>
            </div>
            <div
              className="text-white custom-learnmore-btn my-5 ms-4 cursor-pointer gap-3"
              onClick={() => moreContent()}
            >
              <span>Learn More</span> <img src={arrowIcon} alt="" />
            </div>
          </section>
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
