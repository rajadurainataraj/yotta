/* eslint-disable no-unused-vars */
import { websiteTypes } from "../datas";
import { useRecoilState } from "recoil";
import { count, serviceData, websiteTypeState } from "../utils/globalState";
import { motion } from "framer-motion";
const WebsiteType = () => {
  const [selectedServices, setSelectedServices] =
    useRecoilState(websiteTypeState);
  const [counts, setCounts] = useRecoilState(count);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const toggleService = (service) => {
    console.log(service);
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
      // setServiceDatas(serviceDatas.filter((item) => item !== service))
    } else {
      setSelectedServices([...selectedServices, service]);
      // setServiceDatas([...serviceDatas, service])
      const existingServicesIndex = serviceDatas.findIndex(
        (data) => "websiteTypeData" in data
      );
      if (existingServicesIndex !== -1) {
        const newServiceDatas = [...serviceDatas];
        newServiceDatas[existingServicesIndex] = {
          websiteTypeData: { ...selectedServices },
        };
        setServiceDatas(newServiceDatas);
      } else {
        setServiceDatas([
          ...serviceDatas,
          { websiteTypeData: { ...selectedServices } },
        ]);
      }
      setCounts(9);
    }
  };
  console.log("update", serviceDatas);
  return (
    <motion.div
      className=""
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <section className="lato text-center service-question ">
        Is it going to?
      </section>
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
    </motion.div>
  );
};

export default WebsiteType;
