/* eslint-disable no-unused-vars */
import { useState } from "react";
import { socialServices } from "../datas.js";
import Buttons from "../Buttons.jsx";
import { useRecoilState } from "recoil";
import { serviceData, count, socialService } from "../utils/globalState.js";
import { motion } from "framer-motion";

const SocialServices = () => {
  const [selectedServices, setSelectedServices] = useRecoilState(socialService);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const [counts, setCounts] = useRecoilState(count);
  console.log(serviceDatas, "service");
  console.log(counts, "counts");
  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
      // setServiceDatas(serviceDatas.filter((item) => item !== service))
    } else {
      setSelectedServices([...selectedServices, service]);
      // setServiceDatas([...serviceDatas, service])
    }
  };

  const nextPage = () => {
    const existingServicesIndex = serviceDatas.findIndex(
      (data) => "socialServicesData" in data
    );
    if (existingServicesIndex !== -1) {
      const newServiceDatas = [...serviceDatas];
      newServiceDatas[existingServicesIndex] = {
        socialServicesData: { ...selectedServices },
      };
      setServiceDatas(newServiceDatas);
    } else {
      setServiceDatas([
        ...serviceDatas,
        { socialServicesData: { ...selectedServices } },
      ]);
    }
    setCounts(2);
  };
  console.log(serviceDatas);
  return (
    <motion.div
      className=""
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <section className="social-section">
        <section className="lato fw-bold my-2 service-question">
          What services would you like to opt?
        </section>
        {socialServices.map((item) => (
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

export default SocialServices;
