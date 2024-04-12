/* eslint-disable react/prop-types */
import thankyou from "../../assets/images/thanku.png";

const ThankYou = ({ onClose }) => {
  const closeThePage = () => {
    onClose();
  };
  return (
    <section className="d-flex flex-column justify-content-center  align-items-center thanks-container">
      <img src={thankyou} alt="thankyou" />
      <h3 className="h2 mb-2 mt-3 mont fw-bold"> Thank you!</h3>
      <p className="p lato fs-5 fw-bold">Will get back to you soon.</p>
      <button
        className="btn btn-outline-dark custom-ouline-btn fw-bold fs-5 "
        onClick={() => closeThePage()}
      >
        Okay
      </button>
    </section>
  );
};

export default ThankYou;
