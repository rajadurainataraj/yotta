// import tech from '../assets/images/tech-img.jpg'
import hero from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section
      className="container-fluid tech-container element-with-border "
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container-fluid next-gen-content-container">
        <div className="next-gen-content">
          <h2 className="white custom-font-75">
            The <span className="black fw-bold h1 custom-font-75">Next</span>
            Gen
          </h2>
          <h2 className="custom-font-60">
            <span className="gradient-text">Designer </span>
            <span className="white">Plat</span>
            <span className="black">form</span>
          </h2>

          <span className="white custom-font-28">
            You will save a lot of time choosing us for
          </span>
          <p className="white custom-font-28">your services</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
