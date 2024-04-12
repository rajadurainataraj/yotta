/* eslint-disable no-unused-vars */
import Buttons from "../Buttons.jsx";
import { count } from "../utils/globalState.js";
import { useRecoilState } from "recoil";
const EstimatedBudget = () => {
  const [counts, setCounts] = useRecoilState(count);
  const nextPage = () => {
    setCounts(5);
  };
  return (
    <section style={{ width: "50vw" }} className="">
      <section className="lato fw-bold text-left h5 fs-4">
        Estimated Budget
      </section>
      <section>
        <input className="custom-reference-input" type="text" />
      </section>

      <section className="d-flex justify-content-center align-items-center ">
        <Buttons onClick={() => nextPage()} />
      </section>
    </section>
  );
};

export default EstimatedBudget;
