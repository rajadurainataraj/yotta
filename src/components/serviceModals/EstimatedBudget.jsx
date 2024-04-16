/* eslint-disable no-unused-vars */
import { useState } from "react";
import Buttons from "../Buttons.jsx";
import { count } from "../utils/globalState.js";
import { useRecoilState } from "recoil";
const EstimatedBudget = () => {
  const [counts, setCounts] = useRecoilState(count);
  const [inputValue, setInputValue] = useState("");
  const nextPage = () => {
    setCounts(5);
  };
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
