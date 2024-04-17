/* eslint-disable no-unused-vars */
import { useState } from "react";

import { websiteTypes } from "../datas";
import { useRecoilState } from "recoil";
import { count, serviceData } from "../utils/globalState";
const WebsiteType = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [counts, setCounts] = useRecoilState(count);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const toggleService = (service) => {
    console.log(service);
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
      setServiceDatas(serviceDatas.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
      setServiceDatas([...serviceDatas, service]);
    }
    setCounts(9);
  };
  console.log("update", selectedServices);

  return (
    <section>
      <section className="lato text-center">Is it going to?</section>
      {websiteTypes.map((item) => (
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
    </section>
  );
};

export default WebsiteType;
