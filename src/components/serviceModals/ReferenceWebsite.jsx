/* eslint-disable no-unused-vars */
import { useRecoilState } from "recoil";
import Buttons from "../Buttons";
import { count, referenceWebsites, serviceData } from "../utils/globalState";
import { motion } from "framer-motion";

const ReferenceWebsite = () => {
  const [inputValue, setInputValue] = useRecoilState(referenceWebsites);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const [counts, setCounts] = useRecoilState(count);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const nextPage = () => {
    const existingServicesIndex = serviceDatas.findIndex(
      (data) => "referenceWebsiteData" in data
    );
    if (existingServicesIndex !== -1) {
      // Replace existing services
      const newServiceDatas = [...serviceDatas];
      newServiceDatas[existingServicesIndex] = {
        referenceWebsiteData: { inputValue },
      };
      setServiceDatas(newServiceDatas);
    } else {
      // Append new services
      setServiceDatas([
        ...serviceDatas,
        { referenceWebsiteData: { inputValue } },
      ]);
    }
    setCounts(2);
  };

  return (
    <motion.div
      className=""
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <section className="lato service-question ">
        Reference Sites (like you wanted to build website something you
        inspired)
      </section>
      <section>
        <input
          className="custom-reference-input"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </section>
      <section className="d-flex justify-content-center align-items-center ">
        <Buttons onClick={() => nextPage()} disabled={inputValue === ""} />
      </section>
    </motion.div>
  );
};

export default ReferenceWebsite;
