import Buttons from "./Buttons";
const ProjectDescription = () => {
  return (
    <section style={{ width: "50vw" }} className="">
      <section className="lato fw-bold text-left h5">
        Project Description
      </section>
      <section>
        <input className="custom-reference-input" type="text" />
      </section>
      <section className="satisfaction d-flex justify-content-between align-items-center px-3 mb-5">
        <p className="p mt-3">100% Satisfaction</p>
        <p className="p mt-3">We’ll don’t sell your data</p>
        <p className="p mt-3">100% Custom made</p>
      </section>
      <section className="d-flex justify-content-center align-items-center ">
        <Buttons />
      </section>
    </section>
  );
};

export default ProjectDescription;
