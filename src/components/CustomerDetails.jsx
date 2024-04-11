import Buttons from "./Buttons";

const CustomerDetails = () => {
  return (
    <section className="d-flex flex-column gap-5 text-left my-4">
      <div className="d-flex align-items-center gap-3 fs-4 ">
        <div className="fw-bold">Hi! Iam</div>
        <input
          type="text"
          className="d-flex border-0 border-bottom"
          placeholder="e.g Aurora"
        />
      </div>
      <div className="d-flex  align-items-center gap-3 fs-4 ">
        <div className="fw-bold">Reach me at</div>
        <input
          type="text"
          className="d-flex border-0 border-bottom"
          placeholder="e.g hello@gmail.com"
        />
      </div>
      <div className="d-flex  align-items-center gap-3 fs-4 ">
        <div className="fw-bold">Country Name</div>
        <input
          type="text"
          className="d-flex border-0 border-bottom"
          placeholder="e.g India"
        />
      </div>
      <div className="d-flex  align-items-center gap-3 fs-4 ">
        <div className="fw-bold">Mobile No.</div>
        <input
          type="text"
          className="d-flex border-0 border-bottom"
          placeholder="9876543210"
        />
      </div>

      <section className="d-flex justify-content-center align-items-center ">
        <button className="btn btn-outline-info">send</button>
      </section>
    </section>
  );
};

export default CustomerDetails;
