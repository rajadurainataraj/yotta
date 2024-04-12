/* eslint-disable react/prop-types */

import "./CustomModal.css"; // Assuming you have a CSS file for styling the modal
import { MdClose } from "react-icons/md";
import ChooseServices from "./serviceModals/ChooseServices.jsx";
import { FaArrowLeftLong } from "react-icons/fa6";
import ProjectType from "./serviceModals/ProjectType.jsx";
import ProjectDescription from "./serviceModals/ProjectDescription.jsx";
import EstimatedBudget from "./serviceModals/EstimatedBudget.jsx";
import CustomerDetails from "./serviceModals/CustomerDetails.jsx";
import ThankYou from "./serviceModals/ThankYou.jsx";
import { count } from "../components/utils/globalState.js";
import { useRecoilState } from "recoil";
const CustomModal = ({ isOpen, onClose }) => {
  const [counts] = useRecoilState(count);
  console.log(counts);
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
            {counts === 1 ? (
              <ChooseServices />
            ) : counts === 2 ? (
              <ProjectType />
            ) : counts === 3 ? (
              <ProjectDescription />
            ) : counts === 4 ? (
              <EstimatedBudget />
            ) : counts === 5 ? (
              <CustomerDetails />
            ) : counts === 6 ? (
              <ThankYou onClose={onClose} />
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;
