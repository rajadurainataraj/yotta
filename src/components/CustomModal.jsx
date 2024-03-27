/* eslint-disable react/prop-types */

import "./CustomModal.css"; // Assuming you have a CSS file for styling the modal
import { MdClose } from "react-icons/md";
import ChooseServices from "./ChooseServices";
const CustomModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="custom-modal-overlay container-fluid "
          // onClick={onClose}
        >
          <div
            className="custom-modal d-flex align-items-center flex-column "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-center align-items-center">
              <h2 className=" ">
                Design A <span className="text-primary">Quote</span>
              </h2>

              <MdClose
                size={30}
                className="modal-close ms-5 cursor-pointer"
                onClick={onClose}
              />
            </div>
            <ChooseServices />
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;
