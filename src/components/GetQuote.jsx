import "./WaterAnimation.css";
import footercontact from "../assets/images/footercontact.png";
import { useState } from "react";

import { useRecoilState } from "recoil";
import CustomModal from "./CustomModal";
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
} from "../components/utils/globalState.js";

const GetQuote = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOpen);
  const [counts, setCounts] = useRecoilState(count);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const [selectedServices, setSelectedServices] =
    useRecoilState(selectedService);
  const [inputValue, setInputValue] = useRecoilState(estimatedBudgets);
  const [inputValuePD, setInputValuePD] = useRecoilState(projectDescriptions);
  const [projectType, setProjectType] = useRecoilState(projectTypes);
  const [referenceWebsite, setReferenceWebsite] =
    useRecoilState(referenceWebsites);
  const [socialServices, setSocialServices] = useRecoilState(socialService);
  const [websiteTypeStates, setWebsiteTypeState] =
    useRecoilState(websiteTypeState);

  const openModal = () => {
    setIsModalOpen(true);
    setCounts(1);
  };

  const closeModal = () => {
    setCounts(0);
    setServiceDatas([]);
    setSelectedServices([]);
    setInputValue("");
    setInputValuePD("");
    setProjectType([]);
    setReferenceWebsite("");
    setSocialServices([]);
    setWebsiteTypeState([]);
    setIsModalOpen(false);
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center flex-column align-items-center  quote-container p-3 "
      style={{
        backgroundImage: `url(${footercontact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "50vh",
        backgroundColor: "#292929",
      }}
    >
      <CustomModal isOpen={isModalOpen} onClose={closeModal} />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h4 className="h4 text-light mont text-center mb-3 mt-3 ">
          Let's talk about what we can build together
        </h4>
        <div
          className="text-container"
          // style={{ height: "250px", overflow: "hidden" }}
        >
          <p className="p lato text-center lato custom-contact-div">
            Whatever may be your requirement - be it a simple website design, a
            complex data driven web application development,<br></br> an
            ecommerce website, a native or cross platform mobile app
            development, a logo and brand identity design, a video <br></br>{" "}
            production or a full fledged digital marketing campaign - we have a
            solution for you.
          </p>
          <p className="p lato text-center lato custom-contact-mobile">
            Whatever may be your requirement - be it a simple website design, a
            complex data driven web application development, an ecommerce
            website, a native or cross platform mobile app development, a logo
            and brand identity design, a video production or a full fledged
            digital marketing campaign - we have a solution for you.
          </p>
        </div>
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
  );
};

export default GetQuote;
