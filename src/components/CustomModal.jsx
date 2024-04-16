/* eslint-disable react/prop-types */

import "./CustomModal.css"; // Assuming you have a CSS file for styling the modal
import { MdClose } from "react-icons/md";
import ChooseServices from "./serviceModals/ChooseServices.jsx";
import { FaArrowLeftLong } from "react-icons/fa6";
import ProjectType from "./serviceModals/ProjectType.jsx";
import ProjectDescription from "./serviceModals/ProjectDescription.jsx";
import EstimatedBudget from "./serviceModals/EstimatedBudget.jsx";
import ReferenceWebsite from "./serviceModals/ReferenceWebsite.jsx";
import CustomerDetails from "./serviceModals/CustomerDetails.jsx";
import ThankYou from "./serviceModals/ThankYou.jsx";
import { count, serviceData } from "../components/utils/globalState.js";
import { useRecoilState } from "recoil";

import SocialServices from "./serviceModals/SocialServices.jsx";
import WebsiteType from "./serviceModals/WebsiteType.jsx";

const CustomModal = ({ isOpen, onClose }) => {
  const [counts, setCounts] = useRecoilState(count);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  console.log(counts);

  const goBack = () => {
    counts === 7
      ? setCounts(1)
      : counts === 8
      ? setCounts(1)
      : setCounts((counts) => counts - 1);
  };
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
              {counts === 1 && <div></div>}
              {counts !== 1 && (
                <div>
                  <FaArrowLeftLong className="fs-5" onClick={() => goBack()} />
                </div>
              )}

              <h2 className="h3 px-3 ">
                Design A <span className="text-primary">Quote</span>
              </h2>

              <MdClose
                size={30}
                className="modal-close ms-5 cursor-pointer"
                onClick={onClose}
              />
            </div>
            {/* {serviceDatas.includes("Digital Marketing") && <SocialServices />} */}

            {counts === 1 && <ChooseServices />}
            {counts === 2 && <ProjectType />}
            {counts === 3 && <ProjectDescription />}
            {counts === 4 && <EstimatedBudget />}
            {counts === 5 && <CustomerDetails />}
            {counts === 6 && <ThankYou onClose={onClose} />}
            {counts === 7 && <SocialServices />}
            {counts === 8 && <WebsiteType />}
            {counts === 9 && <ReferenceWebsite />}
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;
