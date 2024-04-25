/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { serviceOptions } from "../datas.js";
// import { useNavigate } from "react-router-dom";
import Buttons from "../Buttons.jsx";
import { count, selectedService, serviceData } from "../utils/globalState.js";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";
const ChooseServices = () => {
  const [counts, setCounts] = useRecoilState(count);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const [selectedServices, setSelectedServices] =
    useRecoilState(selectedService);

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
      // setServiceDatas(serviceDatas.filter((item) => item !== service))
    } else {
      setSelectedServices([...selectedServices, service]);
      // setServiceDatas([...serviceDatas, { services: service }])
    }
  };

  const nextPage = () => {
    const existingServicesIndex = serviceDatas.findIndex(
      (data) => "services" in data
    );
    if (existingServicesIndex !== -1) {
      const newServiceDatas = [...serviceDatas];
      newServiceDatas[existingServicesIndex] = {
        services: { ...selectedServices },
      };
      setServiceDatas(newServiceDatas);
    } else {
      setServiceDatas([...serviceDatas, { services: { ...selectedServices } }]);
    }

    if (selectedServices.includes("Digital Marketing")) {
      setCounts(7);
    } else if (selectedServices.includes("Website")) {
      setCounts(8);
    } else if (selectedServices.includes("Training & Internship")) {
      setCounts(5);
    } else {
      setCounts(2);
    }
  };

  return (
    <motion.div
      className=""
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <section>
        <section className="lato fw-bold fs-5 service-question">
          What services would you like to opt?
        </section>
        {serviceOptions.map((item) => (
          <section
            key={item}
            className={`d-flex choose-service-container  fw-bolder fs-5 d-flex align-items-center justify-content-center p-2 px-5 lato my-3 ${
              selectedServices.includes(item) ? "selected" : ""
            }`}
            onClick={() => toggleService(item)}
          >
            {item}
          </section>
        ))}
        <section className="d-flex justify-content-center align-items-center ">
          <Buttons
            onClick={() => nextPage()}
            disabled={selectedServices.length === 0}
          />
        </section>
      </section>
    </motion.div>
  );
};

export default ChooseServices;
