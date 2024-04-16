/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";
const Buttons = ({ onClick, disabled }) => {
  return (
    <button
      type="button"
      className="btn btn-light bg-light fs-5 text-primary"
      onClick={onClick}
      disabled={disabled}
    >
      Continue <FaArrowRightLong />
    </button>
    // <button type="button" className="btn btn-light ">
    //   Light
    // </button>
  );
};

export default Buttons;
