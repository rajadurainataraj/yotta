/* eslint-disable no-unused-vars */
import { useState } from "react";
import { serviceOptions } from "../datas.js";
// import { useNavigate } from "react-router-dom";
import Buttons from "../Buttons.jsx";
import { count } from "../utils/globalState.js";
import { useRecoilState } from "recoil";
const ChooseServices = () => {
  const [counts, setCounts] = useRecoilState(count);
  const [selectedServices, setSelectedServices] = useState([]);
  // const navigate = useNavigate();
  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };
  const nextPage = () => {
    setCounts(2);
  };
  console.log(selectedServices);
  return (
    <section>
      <section className="lato fw-bold fs-5">
        What services would you like to opt?
      </section>
      {serviceOptions.map((item) => (
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
        <Buttons onClick={() => nextPage()} />
      </section>
    </section>
  );
};

export default ChooseServices;
