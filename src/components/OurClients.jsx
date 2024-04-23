import { useEffect } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import c1 from '../assets/images/c1.jpg'
import c2 from '../assets/images/c2.jpg'
import c3 from '../assets/images/c3.jpg'
import c4 from '../assets/images/c4.jpg'
import c5 from '../assets/images/c5.jpg'

const images = [c1, c2, c3, c4, c5]

const OurClients = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller')

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation(scrollers)
    }
  }, [])

  const addAnimation = (scrollers) => {
    scrollers.forEach((scroller) => {
      scroller.setAttribute('data-animated', true)

      const scrollerInner = scroller.querySelector('.scroller__inner')
      const scrollerContent = Array.from(scrollerInner.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        duplicatedItem.setAttribute('aria-hidden', true)
        scrollerInner.appendChild(duplicatedItem)
      })
    })
  }

  return (
    <section className="container-fluid custom-client-container">
      <Container fluid className="py-5 ">
        <h3 className="content-header text-center py-3">Our Clients</h3>
        <Row>
          <Col className="custom-scroll-infinity">
            <div className="scroller" data-direction="right" data-speed="slow">
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
          <p className="h5 text-center pt-4 ">
            Many companies, startups love our <span>products and services</span>
          </p>
        </div>
      </Container>
    </section>
  )
}

export default OurClients
