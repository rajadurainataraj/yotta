import { tech } from "./datas";
const Technologies = () => {
  return (
    <section className="py-5 custom-technologies">
      <div className="content-header h3 text-center py-3">
        Available on these technologies
      </div>
      <section className="container-fluid d-flex flex-wrap custom-tech g-5 justify-content-center align-items-center ">
        {tech.map((techItem, index) => (
          <img key={index} src={techItem} alt={techItem} />
        ))}
      </section>
    </section>
  );
};

export default Technologies;
