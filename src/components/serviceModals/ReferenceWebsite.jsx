/* eslint-disable no-unused-vars */
import { useRecoilState } from "recoil";
import Buttons from "../Buttons";
import { count, serviceData } from "../utils/globalState";
import { useState } from "react";

const ReferenceWebsite = () => {
  const [inputValue, setInputValue] = useState("");
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const [counts, setCounts] = useRecoilState(count);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  // const nextPage = () => {
  //   setServiceDatas()
  //   setCounts(2);
  // };
  const nextPage = () => {
    const newServiceData = { ReferenceWebsite: inputValue };

    setServiceDatas((prevServiceDatas) => {
      const updatedServiceDatas = [...prevServiceDatas];
      const index = updatedServiceDatas.findIndex(
        (item) => item.ReferenceWebsite === inputValue
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
    setCounts(2); // Clear the input after updating serviceDatas
  };
  return (
    <section>
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
    </section>
  );
};

export default ReferenceWebsite;
