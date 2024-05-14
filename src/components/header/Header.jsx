/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo2 from '../../assets/logo/logosvg.svg'
import ContactInfo from '../ContactInfo'
import { IoCloseSharp } from 'react-icons/io5'
import { motion } from 'framer-motion'
import {
  count,
  estimatedBudgets,
  projectDescriptions,
  projectTypes,
  referenceWebsites,
  selectedService,
  serviceData,
  socialService,
  websiteTypeState,
  getCourseInput,
} from '../utils/globalState'
import { useRecoilState } from 'recoil'
import bgContact from '../../assets/images/contactBg.png'

const Header = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('Home')
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [selectedServices, setSelectedServices] =
    useRecoilState(selectedService)
  const [inputValue, setInputValue] = useRecoilState(estimatedBudgets)
  const [inputValuePD, setInputValuePD] = useRecoilState(projectDescriptions)
  const [projectType, setProjectType] = useRecoilState(projectTypes)
  const [referenceWebsite, setReferenceWebsite] =
    useRecoilState(referenceWebsites)
  const [socialServices, setSocialServices] = useRecoilState(socialService)
  const [websiteTypeStates, setWebsiteTypeState] =
    useRecoilState(websiteTypeState)
  const [getCourseInputs, setCoureInputs] = useRecoilState(getCourseInput)
  const [counts, setCounts] = useRecoilState(count)
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData)
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavItemSelect = (item) => {
    setSelectedNavItem(item)
    // handleServicesClick();
  }

  const handleContactOpen = () => {
    setIsContactOpen(true)
    // handleServicesClick();
  }

  const handleContactClose = () => {
    setCounts(0)
    setServiceDatas([])
    setSelectedServices([])
    setInputValue('')
    setInputValuePD('')
    setProjectType([])
    setReferenceWebsite('')
    setSocialServices([])
    setWebsiteTypeState([])
    setIsContactOpen(false)
    getCourseInputs('')
  }
  const handleNavItemSelects = (item) => {
    setSelectedNavItem(item)
    handleServicesClick()

    if (item === 'About') {
      navigate('/')
      setTimeout(() => {
        const aboutSection = document.getElementById('about-us-section')
        if (aboutSection) {
          const scrollOptions = { behavior: 'smooth' }
          // Check if it's a mobile device
          if (/Mobi|Android/i.test(navigator.userAgent)) {
            // For mobile, use the top alignment instead of end
            scrollOptions.block = 'nearest'
          } else {
            // For desktop, use the end alignment
            scrollOptions.block = 'center'
          }
          aboutSection.scrollIntoView(scrollOptions)
        }
      }, 100) // Adjust the delay as needed
    }
  }

  // const handleNavItemSelects = (item) => {
  //   setSelectedNavItem(item);
  //   handleServicesClick();

  //   if (item === "About") {
  //     navigate("/");
  //     const isMobile = window.innerWidth <= 768; // Set your breakpoint for mobile screens
  //     const scrollPosition = isMobile
  //       ? window.innerHeight * 0.55
  //       : window.innerHeight * 0.85;
  //     window.scrollTo({
  //       top: scrollPosition,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const handleServicesClick = () => {
    const navbar = document.getElementById('navbarSupportedContent')
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show')
    }
  }

  return (
    <div className="nav-container-main">
      <nav className="navbar navbar-expand-lg px-4 custom-nav container-fluid">
        <div className="d-flex">
          <Link to="/">
            <img src={logo2} alt="" className="logo2" />
          </Link>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item nav-header-container d-sm-block d-xl-block ">
              <a
                className="nav-link fs-4 nav-header text-dark fw-bolder"
                href="/"
              ></a>
              {/* <p className="sub-logo-title">Enlighten the Dark Data</p> */}
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse custom-navv me-auto"
          id="navbarSupportedContent"
        >
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className={`nav-item ${
                  selectedNavItem === 'Home' ? 'active' : ''
                }`}
              >
                <a
                  className="nav-link mx-2"
                  href="/"
                  onClick={() => handleNavItemSelect('Home')}
                  style={{
                    color: location.pathname === '/' ? 'blue !important' : '',
                  }}
                >
                  Home
                </a>
              </li>
              <li
                className={`nav-item dropdown mx-2 ${
                  selectedNavItem === 'Services' ? 'active' : ''
                }`}
              >
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => handleNavItemSelect('Services')}
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to={'services' + '/customsoftware'}
                      onClick={handleServicesClick}
                    >
                      Custom Software
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'services' + '/digitalmarketing'}
                      onClick={handleServicesClick}
                    >
                      <a className="dropdown-item">Digital Marketing</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'services' + '/mobileapplication'}
                      onClick={handleServicesClick}
                    >
                      <a className="dropdown-item">Mobile Application</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'services' + '/website'}
                      onClick={handleServicesClick}
                    >
                      <a className="dropdown-item">Website</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'services' + '/trainingandinternships'}
                      onClick={handleServicesClick}
                    >
                      <a className="dropdown-item">
                        Training
                        <span span className="and-symbol">
                          &
                        </span>
                        Internships
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'services' + '/uiuxdesign'}
                      onClick={handleServicesClick}
                    >
                      <a className="dropdown-item">UI/UX design</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={`nav-item mx-2 ${
                  selectedNavItem === 'Careers' ? 'active' : ''
                }`}
                onClick={handleServicesClick}
              >
                <Link to={'/careers'}>
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => handleNavItemSelect('Careers')}
                    style={{
                      color: selectedNavItem === 'Careers' ? 'blue' : '',
                    }}
                  >
                    Careers
                  </a>
                </Link>
              </li>
              <li
                className={`nav-item mx-2 ${
                  selectedNavItem === 'About' ? 'active' : ''
                }`}
              >
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleNavItemSelects('About')}
                  style={{ color: selectedNavItem === 'About' ? 'blue' : '' }}
                >
                  About Us
                </a>
              </li>

              <li
                className={`nav-item mx-2 ${
                  selectedNavItem === 'Contact Us' ? 'active' : ''
                }`}
                onClick={handleContactOpen}
              >
                <span className="nav-link">Contact Us</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isContactOpen && (
        <div
          className="modal-overlay"
          style={{ backgroundImage: `url(${bgContact})` }}
        >
          <div className="modal-content">
            <ContactInfo onClose={handleContactClose} />
            {count === 0 && (
              <div
                className="contact-close custom-icon-contact fw-bolder border-2"
                onClick={handleContactClose}
              >
                <IoCloseSharp color="##000000" className="icon-close-modal1" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
