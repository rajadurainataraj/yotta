import CarouselContainer from "./CarouselContainer";

const WhatWeDo = () => {
  return (
    <section className="py-2 what-we-do-container mt-3">
      <section className="text-center">
        <div className="content-header">What We Do</div>
        <p className="content-para">Everything you need for your success</p>
        <div className="d-flex justify-content-center align-items-center  align-content-center ">
          <CarouselContainer />
        </div>
      </section>
    </section>
  );
};

export default WhatWeDo;
