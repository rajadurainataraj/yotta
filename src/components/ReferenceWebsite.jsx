import Buttons from "./Buttons";
const ReferenceWebsite = () => {
  return (
    <section>
      <section className="lato">
        Reference Sites (like you wanted to build website something you
        inspired)
      </section>
      <section>
        <input className="custom-reference-input" type="text" />
      </section>
      <section className="d-flex justify-content-center align-items-center ">
        <Buttons />
      </section>
    </section>
  );
};

export default ReferenceWebsite;
