/* eslint-disable no-unused-vars */
import { useState } from "react";
import { tranings } from "../datas.js";
import Buttons from "../Buttons.jsx";
import { useRecoilState } from "recoil";
import {
  serviceData,
  count,
  socialService,
  projectDescriptions,
  training,
  getCourseInput,
} from "../utils/globalState.js";
import { motion } from "framer-motion";

const OurTranings = () => {
  const [selectedServices, setSelectedServices] = useRecoilState(training);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const [counts, setCounts] = useRecoilState(count);
  const [inputValue, setInputValue] = useRecoilState(getCourseInput);

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
      // setServiceDatas(serviceDatas.filter((item) => item !== service))
    } else {
      setSelectedServices([...selectedServices, service]);
      // setServiceDatas([...serviceDatas, service])
    }
  };
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  const nextPage = () => {
    const existingServicesIndex = serviceDatas.findIndex(
      (data) => "trainingsData" in data
    );
    if (existingServicesIndex !== -1) {
      const newServiceDatas = [...serviceDatas];
      newServiceDatas[existingServicesIndex] = {
        trainingsData: { ...selectedServices, inputValue },
      };
      setServiceDatas(newServiceDatas);
    } else {
      setServiceDatas([
        ...serviceDatas,
        { trainingsData: { ...selectedServices, inputValue } },
      ]);
    }
    setCounts(5);
  };

  var datas = true;
  if (inputValue === "" && selectedServices.length > 0) {
    datas = false;
  } else if (inputValue !== "" && selectedServices.length === 0) {
    datas = false;
  } else if (inputValue !== "" && selectedServices.length > 0) {
    datas = false;
  }

  return (
    <motion.div
      className=""
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <section className="social-section">
        <section className="lato fw-bold my-2  h5  service-question">
          What option would you like to choose?
        </section>
        {tranings.map((item) => (
          <section
            key={item}
            className={`d-flex choose-service-container fw-bolder fs-5 d-flex align-items-center justify-content-center p-2 px-5 lato my-3 ${
              selectedServices.includes(item) ? "selected" : ""
            }`}
            onClick={() => toggleService(item)}
          >
            {item}
          </section>
        ))}

        <section>
          <section className="lato fw-bold text-left fs-4 h5 service-question ">
            Do you want any other training?
          </section>
          <input
            className="custom-reference-input mt-4 fs-5 lato"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="course name"
          />
        </section>
        <section className="d-flex justify-content-center align-items-center ">
          <Buttons onClick={() => nextPage()} disabled={datas} />
        </section>
      </section>
    </motion.div>
  );
};

export default OurTranings;
