/* eslint-disable no-unused-vars */
import { useState } from "react";
import Buttons from "../Buttons.jsx";
import { count } from "../utils/globalState.js";
import { useRecoilState } from "recoil";
const ProjectDescription = () => {
  const [counts, setCounts] = useRecoilState(count);
  const [inputValue, setInputValue] = useState("");
  const nextPage = () => {
    console.log(4);
    setCounts(4);
  };

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <section style={{ width: "50vw" }} className="">
      <section className="lato fw-bold text-left fs-4 h5">
        Project Description
      </section>
      <section>
        <input
          className="custom-reference-input"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </section>
      <section className="satisfaction d-flex justify-content-between align-items-center px-3 mb-5">
        <p className="p mt-3">100% Satisfaction</p>
        <p className="p mt-3">We’ll don’t sell your data</p>
        <p className="p mt-3">100% Custom made</p>
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

export default ProjectDescription;
