/* eslint-disable react/prop-types */
import { FaArrowRightLong } from 'react-icons/fa6'
const Buttons = ({ onClick, disabled }) => {
  return (
    <div>
      <button
        type="button"
        className=" fs-5 text-primary custom-wave-btn"
        onClick={onClick}
        disabled={disabled}
      >
        Continue <FaArrowRightLong />
      </button>
    </div>
    // <button type="button" className="btn btn-light ">
    //   Light
    // </button>
  )
}

export default Buttons
