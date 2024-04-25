/* eslint-disable no-unused-vars */
import { useState } from "react";
import Buttons from "../Buttons.jsx";
import { useRecoilState } from "recoil";
import { count, estimatedBudgets, serviceData } from "../utils/globalState.js";
import { motion } from "framer-motion";

const EstimatedBudget = () => {
  const [counts, setCounts] = useRecoilState(count);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const [inputValue, setInputValue] = useRecoilState(estimatedBudgets);

  const nextPage = () => {
    const existingServicesIndex = serviceDatas.findIndex(
      (data) => "EstimatedBudget" in data
    );
    if (existingServicesIndex !== -1) {
      // Replace existing services
      const newServiceDatas = [...serviceDatas];
      newServiceDatas[existingServicesIndex] = {
        EstimatedBudget: { inputValue },
      };
      setServiceDatas(newServiceDatas);
    } else {
      // Append new services
      setServiceDatas([...serviceDatas, { EstimatedBudget: { inputValue } }]);
    }
    setCounts(5);
  };

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <motion.div
      className=""
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <section style={{ width: "50vw" }} className="estimated-budget-section">
        <section className="lato fw-bold text-left h5 fs-4 service-question ">
          Estimated Budget
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
          <Buttons
            onClick={() => nextPage()}
            disabled={inputValue.length === 0}
          />
        </section>
      </section>
    </motion.div>
  );
};

export default EstimatedBudget;
