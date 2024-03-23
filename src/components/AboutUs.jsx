import ImageSlider from "./ImageSlider";

const AboutUs = () => {
  return (
    <section className="container-fluid about-container py-4">
      <div className="content-header text-center mb-3 custom-about-header2">
        About Us
      </div>
      <section className="d-flex custom-about justify-content-evenly gap-5">
        <ImageSlider />
        <section>
          <div className="content-header text-center mb-3 d-sm-table d-md-none  custom-about-header3">
            About Us
          </div>
          <p className="about-p my-5">
            Yotta Web Services was founded by <strong>Mrs.Renuka</strong> in the
            year <strong>2021</strong> with the goal to provide opportunities in
            developing web development projects. We are a team of talented
            designers in making websites using latest technologies. Our Services
            will spread in wide range from
            <strong>
              custom software, Digital Marketing, Mobile Applications and Dev
            </strong>
            Apps and to provide lasting client relationships by using
            exceptional stakeholder value in an environment of trust and
            respect. We provide eco-friendly workmanship with expert guidance
            and it will be helpful for the upcoming generation to gain knowledge
            from expertise. We provide excellent services to our clients and to
            be the best in software Development Industry. This company is
            boosting the young generations to promote more modern technologies
            that are handled by the expert people. Our core values are
            Integrity, Quality, Reliability, Team Work and Trustworthy products
            and services.
          </p>
        </section>
      </section>
    </section>
  );
};

export default AboutUs;
