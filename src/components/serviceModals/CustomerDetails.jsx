/* eslint-disable no-unused-vars */
import { count } from "../utils/globalState.js";
import { useRecoilState } from "recoil";
const CustomerDetails = () => {
  const [counts, setCounts] = useRecoilState(count);
  const nextPage = () => {
    setCounts(6);
  };
  return (
    <section className="d-flex flex-column gap-5 text-left my-4">
      <div className="d-flex align-items-center gap-3 fs-5 ">
        <div className="fw-bold">Hi! Iam</div>
        <input
          type="text"
          className="d-flex border-0 custom-input-customer  border-bottom"
          placeholder="e.g Aurora"
        />
      </div>
      <div className="d-flex  align-items-center gap-3 fs-5 ">
        <div className="fw-bold">Reach me at</div>
        <input
          type="text"
          className="d-flex border-0 border-bottom custom-input-customer"
          placeholder="e.g hello@gmail.com"
        />
      </div>
      <div className="d-flex  align-items-center gap-3 fs-5 ">
        <div className="fw-bold">Country Name</div>
        <input
          type="text"
          className="d-flex border-0 border-bottom custom-input-customer"
          placeholder="e.g India"
        />
      </div>
      <div className="d-flex  align-items-center gap-3 fs-5 ">
        <div className="fw-bold">Mobile No.</div>
        <input
          type="text"
          className="d-flex border-0 border-bottom custom-input-customer"
          placeholder="9876543210"
        />
      </div>

      <section className="d-flex justify-content-center align-items-center ">
        <button
          type="button"
          className="btn btn-outline-dark custom-ouline-btn fw-bold fs-5 "
          onClick={() => nextPage()}
        >
          send
        </button>
      </section>
    </section>
  );
};

export default CustomerDetails;
