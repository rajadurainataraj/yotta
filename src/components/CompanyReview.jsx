import { useState, useEffect } from 'react'
import { ClientData } from './datas'
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md'

const CompanyReview = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? ClientData.length - 1 : activeIndex - 1)
  }

  const handleNext = () => {
    setActiveIndex(activeIndex === ClientData.length - 1 ? 0 : activeIndex + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === ClientData.length - 1 ? 0 : prevIndex + 1
      )
    }, 6000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {ClientData.map((client, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <div className="card">
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
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">
          <MdOutlineArrowBackIosNew />
        </span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
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
  )
}

export default CompanyReview
