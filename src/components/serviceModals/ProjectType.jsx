/* eslint-disable no-unused-vars */
import { useState } from "react";
import { projectType } from "../datas.js";
import Buttons from "../Buttons.jsx";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { count, serviceData, projectTypes } from "../utils/globalState.js";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";

const ProjectType = () => {
  const [counts, setCounts] = useRecoilState(count);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const [selectedServices, setSelectedServices] = useRecoilState(projectTypes);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [selectedModal, setSelectedModal] = useState(null);

  const toggleService = (service, modal) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
      // setServiceDatas(serviceDatas.filter((item) => item !== service))
      setSelectedModal(null);
    } else {
      setSelectedServices([...selectedServices, service]);
      // setServiceDatas([...serviceDatas, service])
      setSelectedModal(modal);
    }
  };
  // console.log(serviceDatas)
  const handleModalPosition = (event) => {
    const rect = event.target.getBoundingClientRect();
    const isMobile = window.innerWidth <= 768; // Set your breakpoint for mobile screens

    if (isMobile) {
      setModalPosition({ x: 0, y: window.innerHeight - 580 }); // Adjust the y position as needed
    } else {
      setModalPosition({ x: rect.left + rect.width, y: rect.top });
    }
  };

  const nextPage = () => {
    const existingServicesIndex = serviceDatas.findIndex(
      (data) => "projectType" in data
    );
    if (existingServicesIndex !== -1) {
      // Replace existing services
      const newServiceDatas = [...serviceDatas];
      newServiceDatas[existingServicesIndex] = {
        projectType: { ...selectedServices },
      };
      setServiceDatas(newServiceDatas);
    } else {
      // Append new services
      setServiceDatas([
        ...serviceDatas,
        { projectType: { ...selectedServices } },
      ]);
    }
    setCounts(3);
  };

  return (
    <motion.div
      className=""
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <section style={{}} className="project-type-container">
        <section
          style={{ display: "flex", flexDirection: "column" }}
          className=""
        >
          <section className="lato fs-4 service-question ">
            How do you want work?
          </section>
          {projectType.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                justifyContent: "center",
              }}
              className="custom-modal12"
            >
              <section
                key={item}
                className={`d-flex choose-service-container fw-bolder fs-5 d-flex container-fluid w-100 align-items-center justify-content-center p-2 px-5 lato my-3 ${
                  selectedServices.includes(item) ? "selected" : ""
                }`}
                onClick={() =>
                  toggleService(item, item === "Project" ? "modal1" : "modal2")
                }
              >
                <div className="project-type-div">{item}</div>
              </section>
              <div>
                <HiOutlineExclamationCircle
                  size={30}
                  color="#FB1E1E"
                  onMouseEnter={(event) => {
                    handleModalPosition(event);
                    setSelectedModal(
                      item === "Project"
                        ? "exclamation-modal1"
                        : "exclamation-modal2"
                    );
                  }}
                />
              </div>
              <div className="exclamation-modal1-container">
                <div
                  className={`exclamation-modal1 ${
                    selectedModal === "modal1" ? "show" : ""
                  }`}
                  style={{
                    top: modalPosition.y,
                    left: modalPosition.x,
                    transform: "translateX(10px)",
                    display:
                      selectedModal === "exclamation-modal1" ? "block" : "none",
                  }}
                >
                  Project-based work involves completing a specific task or set
                  of tasks within a defined scope, timeline, and budget.
                </div>
              </div>
              <div
                className={`exclamation-modal2 ${
                  selectedModal === "modal2" ? "show" : ""
                }`}
                style={{
                  top: modalPosition.y,
                  left: modalPosition.x,
                  transform: "translateX(10px)",
                  display:
                    selectedModal === "exclamation-modal2" ? "block" : "none",
                }}
              >
                Retainer is an agreement where the client pays a set fee on a
                recurring basis (e.g., monthly) in exchange for a certain amount
                of work or access to services.
              </div>
            </div>
          ))}
          <section className="d-flex justify-content-center align-items-center pb-5">
            <Buttons
              onClick={() => nextPage()}
              disabled={selectedServices.length === 0}
            />
          </section>
        </section>
      </section>
    </motion.div>
  );
};
export default ProjectType;
