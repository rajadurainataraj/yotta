/* eslint-disable react/no-unescaped-entities */
import footercontact from "../assets/images/footercontact.png";
import { useState } from "react";
// import CustomModal from "../CustomModal";
const GetQuote = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      className="container-fluid d-flex justify-content-center flex-column align-items-center quote-container  "
      style={{
        backgroundImage: `url(${footercontact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "50vh",
        // width: "100vw", // Added this line
      }}
    >
      <div className="w-50 d-flex  flex-column justify-content-center align-items-center ">
        <h4 className="h4 text-light mont text-center mont mb-3">
          Let's talk about what we can build together
        </h4>
        <p className="p lato text-center lato">
          Whatever may be your requirement - be it a simple website design, a
          complex data driven web application development, an ecommerce website,
          a native or cross platform mobile app development, a logo and brand
          identity design, a video production or a full fledged digital
          marketing campaign - we have a solution for you.
        </p>
        {/* <button type="submit" className="design-btn fw-bolder mont">
          Design A Quote
        </button> */}
        <div className="water-fill-btn my-4" onClick={openModal}></div>
      </div>
    </div>
  );
};

export default GetQuote;
