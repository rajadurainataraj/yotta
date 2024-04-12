/* eslint-disable react/prop-types */

import "./CustomModal.css"; // Assuming you have a CSS file for styling the modal
import { MdClose } from "react-icons/md";
import ChooseServices from "./ChooseServices";
import { FaArrowLeftLong } from "react-icons/fa6";
import WebsiteType from "./WebsiteType";
import ReferenceWebsite from "./ReferenceWebsite";
import ProjectType from "./ProjectType";
import ProjectDescription from "./ProjectDescription";
import EstimatedBudget from "./EstimatedBudget";
import CustomerDetails from "./CustomerDetails";
import SocialServices from "./SocialServices";

const CustomModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="custom-modal-overlay container-fluid "
          // onClick={onClose}
        >
          <div
            className="custom-modal custom-modal d-flex flex-column align-items-center "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between w-100 px-3">
              <div>
                <FaArrowLeftLong className="fs-5" />
              </div>
              <h2 className="h3 px-3 ">
                Design A <span className="text-primary">Quote</span>
              </h2>

              <MdClose
                size={30}
                className="modal-close ms-5 cursor-pointer"
                onClick={onClose}
              />
            </div>
            <SocialServices />
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;
