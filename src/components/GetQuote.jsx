/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import './WaterAnimation.css'
import footercontact from '../assets/images/footercontact.png'
import { useState } from 'react'

import { useRecoilState } from 'recoil'
import CustomModal from './CustomModal'
import {
  count,
  modalOpen,
  estimatedBudgets,
  projectDescriptions,
  projectTypes,
  referenceWebsites,
  selectedService,
  serviceData,
  socialService,
  websiteTypeState,
} from '../components/utils/globalState.js'
// import CustomModal from "../CustomModal";
const GetQuote = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOpen)
  const [counts, setCounts] = useRecoilState(count)
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData)
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
  // const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    setCounts(1)
  }

  const closeModal = () => {
    setCounts(0)
    setServiceDatas([])
    setSelectedServices([])
    setInputValue('')
    setInputValuePD('')
    setProjectType([])
    setReferenceWebsite('')
    setSocialServices([])
    setWebsiteTypeState([])
    setIsModalOpen(false)
  }
  return (
    <div
      className="container-fluid d-flex justify-content-center flex-column align-items-center  quote-container p-3 "
      style={{
        backgroundImage: `url(${footercontact})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '50vh',
        // width: "100vw", // Added this line
      }}
    >
      <CustomModal isOpen={isModalOpen} onClose={closeModal} />
      <div className="w-50 d-flex  flex-column justify-content-center align-items-center ">
        <h4 className="h4 text-light mont text-center mont mb-3 mt-3 custom-contact-div">
          Let's talk about what we can build together
        </h4>
        <p className="p lato text-center lato custom-contact-div">
          Whatever may be your requirement - be it a simple website design, a
          complex data driven web application development, an ecommerce website,
          a native or cross platform mobile app development, a logo and brand
          identity design, a video production or a full fledged digital
          marketing campaign - we have a solution for you.
        </p>
        {/* <button type="submit" className="design-btn fw-bolder mont">
          Design A Quote
        </button> */}

        {/* <div className="water-fill-btn my-4" onClick={openModal}></div> */}
        {counts === 0 && (
          <div className="waves-btn my-4" onClick={openModal}>
            <div className="waves">
              <span>Design A Quote</span>
              <div className="wave"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GetQuote
