import { useState } from "react";

import { websiteTypes } from "../datas";
import { useRecoilState } from "recoil";
import { count } from "../utils/globalState";
const WebsiteType = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [counts, setCounts] = useRecoilState(count);

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
    setCounts(9);
  };
  console.log(selectedServices);

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
