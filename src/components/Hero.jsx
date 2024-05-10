// import tech from '../assets/images/tech-img.jpg'
import hero from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section
      className="container-fluid tech-container element-with-border "
      style={{
        backgroundImage: `url(${hero})`,
        // backgroundSize: 'contain',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        // backgroundSize: '100% 100%',
      }}
    >
      <div className="container-fluid next-gen-content-container">
        <div className="next-gen-content">
          <h2 className="white custom-font-75 fw-bold ">
            The
            <span className="black fw-bold h1 custom-font-75 fw-bold ">
              Next
            </span>
            Gen
          </h2>
          <h2 className="custom-font-60 mb-3">
            <span className="gradient-text">Designer </span>
            <span className="white fw-bold">Plat</span>
            <span className="black fw-bold">form</span>
          </h2>

          <span className="p white custom-font-28">
            You will save a lot of time choosing us for
          </span>
          <p className="white custom-font-28">your services</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
