/* eslint-disable react/no-unescaped-entities */
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import contactbg from "../assets/images/bg-contact.png";
import footercontact from "../assets/images/footercontact.png";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const contactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  requirement: Yup.string().required("Required"),
  contactNumber: Yup.number().required("Required"),
});

const ContactInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      className="container-fluid custom-contact-main my-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <section className="custom-contact-info d-flex justify-content-between p-3">
        {/* <div className="contact-close">
          <IoClose />
        </div> */}
        <section className="w-50">
          <h3 className="h3 fw-bold">
            We'd <span className="h3 love-text fw-bolder ">love</span> to hear
            from you!!
          </h3>
          <p className="p lato">
            Brief us your requirements below, and let's connect.
          </p>

          <div>
            <Formik
              initialValues={{
                firstName: "",
                email: "",
                requirement: "",
                contactNumber: "", // Added contactNumber to initialValues
              }}
              validationSchema={contactSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="d-flex flex-column ">
                    <label htmlFor="firstName fw-bold">
                      Your name <span className="text-danger">*</span>
                    </label>
                    <Field name="firstName" placeholder="Enter your name" />

                    <div className="custom-error-contact text-danger errdiv">
                      {errors.firstName && touched.firstName
                        ? errors.firstName
                        : null}
                    </div>
                  </div>
                  <div className="d-flex flex-column ">
                    <label htmlFor="email fw-bold">
                      Email <span className="text-danger">*</span>
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                    />

                    <div className="custom-error-contact text-danger errdiv">
                      {errors.email && touched.email ? errors.email : null}
                    </div>
                  </div>
                  <div className="d-flex flex-column ">
                    <label htmlFor="contactNumber fw-bold">
                      Contact Number <span className="text-danger">*</span>
                    </label>
                    <Field
                      name="contactNumber"
                      type="number"
                      placeholder="Enter your number"
                    />

                    <div className="custom-error-contact text-danger errdiv">
                      {errors.contactNumber && touched.contactNumber
                        ? errors.contactNumber
                        : null}
                    </div>
                  </div>
                  <div className="d-flex flex-column ">
                    <label htmlFor="requirement fw-bold">
                      Your Requirement <span className="text-danger">*</span>
                    </label>
                    <Field
                      name="requirement"
                      as="textarea"
                      placeholder="Enter your requirement"
                    />

                    <div className="custom-error-contact text-danger errdiv">
                      {errors.requirement && touched.requirement
                        ? errors.requirement
                        : null}
                    </div>
                  </div>
                  <div className="my-2 d-flex  flex-column ">
                    <button
                      type="submit"
                      className="my-1 border-0 custom-btn-contactinfo  text-light"
                    >
                      Send Message
                    </button>
                    <span className="lato respect-span">
                      We respect your privacy. We promise we won't spam you :)
                    </span>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </section>

        <section
          className="customImg"
          style={{
            marginTop: "80px",
            backgroundImage: `url(${contactbg})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            marginLeft: "10vw",
            width: "40vw",
          }}
        ></section>
      </section>
      <section
        className="footer-contact d-flex justify-content-center flex-column align-items-center "
        style={{
          backgroundImage: `url(${footercontact})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h4 className="h4 text-light mont">
          Let's talk about what we can build together
        </h4>
        <p className="p lato">
          Whatever may be your requirement - be it a simple website design, a
          complex data driven web application development, an ecommerce website,
          a native or cross platform mobile app development, a logo and brand
          identity design, a video production or a full fledged digital
          marketing campaign - we have a solution for you.
        </p>
        <button className="btn btn-outline-primary text-light footer-contact-btn border-2 mont">
          Contact us now for a free quote!
        </button>
      </section>
    </motion.section>
  );
};

export default ContactInfo;
