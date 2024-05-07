/* eslint-disable no-unused-vars */
import React from "react";
import "./CustomModal.css";
import { MdClose } from "react-icons/md";
import ChooseServices from "./serviceModals/ChooseServices.jsx";
import { FaArrowLeftLong } from "react-icons/fa6";
import ProjectType from "./serviceModals/ProjectType.jsx";
import ProjectDescription from "./serviceModals/ProjectDescription.jsx";
import EstimatedBudget from "./serviceModals/EstimatedBudget.jsx";
import ReferenceWebsite from "./serviceModals/ReferenceWebsite.jsx";
import CustomerDetails from "./serviceModals/CustomerDetails.jsx";
import ThankYou from "./serviceModals/ThankYou.jsx";
import {
  count,
  selectedService,
  serviceData,
  socialService,
} from "../components/utils/globalState.js";
import { useRecoilState } from "recoil";

import SocialServices from "./serviceModals/SocialServices.jsx";
import WebsiteType from "./serviceModals/WebsiteType.jsx";
import OurTranings from "./serviceModals/OurTranings.jsx";
import { motion, AnimatePresence } from "framer-motion";

const CustomModal = ({ isOpen, onClose }) => {
  const [counts, setCounts] = useRecoilState(count);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const [selectedServices, setSelectedServices] =
    useRecoilState(selectedService);
  const [selectedServiceSocial, setSelectedServiceSocial] =
    useRecoilState(socialService);

  const serviceDatasKeys = serviceDatas.reduce((acc, obj) => {
    Object.keys(obj).forEach((key) => {
      acc.push(key);
    });
    return acc;
  }, []);

  const goBack = () => {
    setCounts((prevCounts) => {
      if (prevCounts === 2 && selectedServiceSocial.length !== 0) {
        return 7;
      } else if (prevCounts === 7 || prevCounts === 8 || prevCounts === 10) {
        return 1;
      } else if (serviceDatasKeys.includes("trainingsData")) {
        return 10;
      } else if (selectedServices.includes("Training & Internship")) {
        return 1;
      } else {
        return prevCounts - 1;
      }
    });
  };

  return (
    <AnimatePresence>
      {isOpen && counts !== 0 && (
        <motion.div
          key={counts}
          className="custom-modal-overlay align-items-center"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: "100%",
            transition: { when: "afterChildren" },
          }}
          transition={{ duration: 0.8 }}
          onClick={onClose}
        >
          {/* {counts !== 0 ? ( */}
          <div
            className="custom-modal d-flex flex-column align-items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between custom-modal-heading-sub w-100 px-3 ">
              {counts === 1 && <div></div>}
              {counts !== 1 && counts !== 6 && (
                <div>
                  <FaArrowLeftLong
                    className="fs-5 cursor-pointer"
                    onClick={() => goBack()}
                  />
                </div>
              )}
              <div>
                {counts !== 6 && (
                  <div className="h3 px-3 custom-modal-heading-quote fw-bold pb-3">
                    Design A <span className="fw-bold fs-1">Quote</span>
                  </div>
                )}
              </div>
              {counts !== 6 && (
                <MdClose
                  size={30}
                  className="modal-close ms-5 cursor-pointer"
                  onClick={onClose}
                />
              )}
            </div>
            {counts === 1 && <ChooseServices />}
            {counts === 2 && <ProjectType />}
            {counts === 3 && <ProjectDescription />}
            {counts === 4 && <EstimatedBudget />}
            {counts === 5 && <CustomerDetails />}
            {counts === 6 && <ThankYou onClose={onClose} />}
            {counts === 7 && <SocialServices />}
            {counts === 8 && <WebsiteType />}
            {counts === 9 && <ReferenceWebsite />}
            {counts === 10 && <OurTranings />}
          </div>
          {/* ) : (
            ""
          )} */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomModal;
