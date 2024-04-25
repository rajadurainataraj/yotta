import { frontEnd, backend, databases, deployment } from "./datas";

const Technologies2 = () => {
  return (
    <section className="container-fluid custom-tech-container my-5">
      <div className="content-header h3 text-center py-3">
        Technologies We Use
      </div>
      <section className="d-flex custom-tech2 justify-content-evenly container-fluid my-4">
        <section className="flex-column  ">
          <div className="tech-title text-center fw-semibold">UI/UX</div>
          <div className="custom-tech2-container d-flex flex-column gap-2 box-tech">
            {frontEnd.map((tech) => (
              <div className="d-flex gap-2 " key={tech.title}>
                <img src={tech.icon} alt={tech.title} /> {tech.title}
              </div>
            ))}
          </div>
        </section>
        <section className="flex-column">
          <div className="tech-title text-center fw-semibold">BACK-END</div>
          <div className="custom-tech2-container d-flex flex-column gap-2 box-tech">
            {backend.map((tech) => (
              <div className="d-flex gap-2" key={tech.title}>
                <img src={tech.icon} alt={tech.title} /> {tech.title}
              </div>
            ))}
          </div>
        </section>

        <section className="flex-column ">
          <div className="tech-title  text-center fw-semibold">DATABASES</div>
          <div className="custom-tech2-container d-flex flex-column gap-2 box-tech">
            {databases.map((tech) => (
              <div className="d-flex gap-2" key={tech.title}>
                <img src={tech.icon} alt={tech.title} /> {tech.title}
              </div>
            ))}
          </div>
        </section>
        <section className="flex-column">
          <div className="tech-title  text-center fw-semibold ">DEPLOYMENT</div>
          <div className="custom-tech2-container d-flex flex-column gap-2 box-tech">
            {deployment.map((tech) => (
              <div className="d-flex gap-2" key={tech.title}>
                <img src={tech.icon} alt={tech.title} /> {tech.title}
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Technologies2;
