import Buttons from "./Buttons";
const EstimatedBudget = () => {
  return (
    <section style={{ width: "50vw" }} className="">
      <section className="lato fw-bold text-left h5">Estimated Budget</section>
      <section>
        <input className="custom-reference-input" type="text" />
      </section>

      <section className="d-flex justify-content-center align-items-center ">
        <Buttons />
      </section>
    </section>
  );
};

export default EstimatedBudget;
