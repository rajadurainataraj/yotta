import { useState } from "react";
import { socialServices } from "../datas.js";
import Buttons from "../Buttons.jsx";
import { useRecoilState } from "recoil";
import { serviceData, count } from "../utils/globalState.js";

const SocialServices = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const [counts, setCounts] = useRecoilState(count);
  console.log(serviceDatas, "service");
  console.log(counts, "counts");
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
      <section className="lato fw-bold my-2">
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
        <Buttons onClick={() => nextPage()} />
      </section>
    </section>
  );
};

export default SocialServices;
