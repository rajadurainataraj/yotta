/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";
const Buttons = ({ onClick, disabled }) => {
  return (
    <div className="service-btn-container">
      <button
        id="btn-service"
        type="button"
        className=" fs-5  service-modal-btn"
        onClick={onClick}
        disabled={disabled}
        style={{ color: "linear-gradient(180deg, #0178be, #0f5c94)" }}
      >
        Continue <FaArrowRightLong />
      </button>
    </div>
    // <button type="button" className="btn btn-light ">
    //   Light
    // </button>
  );
};

export default Buttons;
