/* eslint-disable no-unused-vars */
import { useState } from "react";
import { projectType } from "../datas.js";
import { IoInformationCircleOutline, IoClose } from "react-icons/io5";

import { count, serviceData, projectTypes } from "../utils/globalState.js";
import { useRecoilState } from "recoil";

const ProjectType = () => {
  const [counts, setCounts] = useRecoilState(count);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const [selectedServices, setSelectedServices] = useRecoilState(projectTypes);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [selectedModal, setSelectedModal] = useState(null);

  const toggleService = (service, modal) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
      setSelectedModal(null);
    } else {
      setSelectedServices([...selectedServices, service]);
      setSelectedModal(modal);
    }
    nextPage();
  };

  const handleModalPosition = (event) => {
    const rect = event.target.getBoundingClientRect();
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      setModalPosition({ x: 0, y: window.innerHeight - 580 });
    } else {
      setModalPosition({ x: rect.left + rect.width, y: rect.top });
    }
  };

  const handleCloseModal = () => {
    setSelectedModal(null);
  };

  const nextPage = () => {
    const existingServicesIndex = serviceDatas.findIndex(
      (data) => "projectType" in data
    );
    if (existingServicesIndex !== -1) {
      const newServiceDatas = [...serviceDatas];
      newServiceDatas[existingServicesIndex] = {
        projectType: { ...selectedServices },
      };
      setServiceDatas(newServiceDatas);
    } else {
      setServiceDatas([
        ...serviceDatas,
        { projectType: { ...selectedServices } },
      ]);
    }
    setCounts(3);
  };

  return (
    <section className="project-type-container">
      <section style={{ display: "flex", flexDirection: "column" }}>
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
              <IoInformationCircleOutline
                size={30}
                color="#3498DB"
                onMouseEnter={(event) => {
                  handleModalPosition(event);
                  setSelectedModal(
                    item === "Project"
                      ? "exclamation-modal1"
                      : "exclamation-modal2"
                  );
                }}
                onMouseLeave={() => handleCloseModal()}
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
                    selectedModal === "exclamation-modal1" ? "flex" : "none",
                }}
              >
                <div>
                  Project-based work involves completing a specific task or set
                  of tasks within a defined scope, timeline, and budget.
                </div>
                <div>
                  <IoClose
                    size={20}
                    color="black"
                    className="close-icon"
                    onClick={handleCloseModal}
                  />
                </div>
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
                  selectedModal === "exclamation-modal2" ? "flex" : "none",
              }}
            >
              <div>
                Retainer is an agreement where the client pays a set fee on a
                recurring basis (e.g., monthly) in exchange for a certain amount
                of work or access to services.
              </div>
              <div>
                <IoClose
                  size={20}
                  color="black"
                  className="close-icon"
                  onClick={handleCloseModal}
                />
              </div>
            </div>
          </div>
        ))}
        {/* <section className="d-flex justify-content-center align-items-center pb-5">
          <Buttons
            onClick={() => nextPage()}
            disabled={selectedServices.length === 0}
          />
        </section> */}
      </section>
    </section>
  );
};

export default ProjectType;
