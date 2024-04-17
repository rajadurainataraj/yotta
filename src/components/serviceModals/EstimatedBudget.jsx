/* eslint-disable no-unused-vars */
import { useState } from "react";
import Buttons from "../Buttons.jsx";
import { count, serviceData } from "../utils/globalState.js";
import { useRecoilState } from "recoil";
const EstimatedBudget = () => {
  const [counts, setCounts] = useRecoilState(count);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const [inputValue, setInputValue] = useState("");

  const nextPage = () => {
    const newServiceData = { EstimatedBudget: inputValue };

    setServiceDatas((prevServiceDatas) => {
      const updatedServiceDatas = [...prevServiceDatas];
      const index = updatedServiceDatas.findIndex(
        (item) => item.EstimatedBudget === inputValue
      );

      if (index !== -1) {
        // If inputValue already exists, update the value
        updatedServiceDatas[index] = newServiceData;
      } else {
        // If inputValue is new, add it to the array
        updatedServiceDatas.push(newServiceData);
      }

      return updatedServiceDatas;
    });

    setInputValue("");
    setCounts(5); // Clear the input after updating serviceDatas
  };
  console.log(serviceDatas);
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <section style={{ width: "50vw" }} className="">
      <section className="lato fw-bold text-left h5 fs-4">
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
  );
};

export default EstimatedBudget;
