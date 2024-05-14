import { frontEnd, backend, databases, deployment, cms, uiux } from "./datas";

const Technologies2 = () => {
  return (
    <section className="container-fluid custom-tech-container mb-5 ">
      <div className="content-header h3 text-center tech-header pb-2 mt-4">
        Technologies We Use
      </div>
      <section className="d-flex gap-4 custom-tech2 justify-content-evenly my-4">
        <section className="flex-column  ">
          <div className="tech-title text-center ">FRONT-END</div>
          <div className="custom-tech2-container d-flex flex-column gap-3 box-tech">
            {frontEnd.map((tech) => (
              <div className="d-flex gap-3 " key={tech.title}>
                <img src={tech.icon} alt={tech.title} /> {tech.title}
              </div>
            ))}
          </div>
        </section>
        <section className="flex-column">
          <div className="tech-title text-center ">BACK-END</div>
          <div className="custom-tech2-container d-flex flex-column gap-3 box-tech">
            {backend.map((tech) => (
              <div className="d-flex gap-3" key={tech.title}>
                <img src={tech.icon} alt={tech.title} /> {tech.title}
              </div>
            ))}
          </div>
        </section>

        <section className="flex-column ">
          <div className="tech-title  text-center ">DATABASES</div>
          <div className="custom-tech2-container d-flex flex-column gap-3 box-tech">
            {databases.map((tech) => (
              <div className="d-flex gap-3" key={tech.title}>
                <img src={tech.icon} alt={tech.title} /> {tech.title}
              </div>
            ))}
          </div>
        </section>
        <section className="flex-column">
          <div className="tech-title  text-center ">DEPLOYMENT</div>
          <div className="custom-tech2-container d-flex flex-column gap-3 box-tech">
            {deployment.map((tech) => (
              <div className="d-flex gap-3" key={tech.title}>
                <img src={tech.icon} alt={tech.title} /> {tech.title}
              </div>
            ))}
          </div>
        </section>

        <section className="flex-column">
          <div className="tech-title  text-center">CMS</div>
          <div className="custom-tech2-container d-flex flex-column gap-3 box-tech">
            {cms.map((tech) => (
              <div className="d-flex gap-3" key={tech.title}>
                <img src={tech.icon} alt={tech.title} /> {tech.title}
              </div>
            ))}
          </div>
        </section>

        <section className="flex-column">
          <div className="tech-title  text-center ">UI/UX</div>
          <div className="custom-tech2-container d-flex flex-column gap-3 box-tech">
            {uiux.map((tech) => (
              <div className="d-flex gap-3" key={tech.title}>
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
