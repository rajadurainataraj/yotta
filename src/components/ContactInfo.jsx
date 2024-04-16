/* eslint-disable react/no-unescaped-entities */
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import contactbg from "../assets/images/bg-contact.png";
import footercontact from "../assets/images/footercontact.png";
import contactBg from "../assets/images/contactBg.png";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

// import { useHistory } from "react-router-dom";
import CustomModal from "./CustomModal";
import { useState } from "react";
import { count, serviceData } from "../components/utils/globalState.js";
import { useRecoilState } from "recoil";
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
  const [counts, setCounts] = useRecoilState(count);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setCounts(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setServiceDatas([]);
    setCounts(0);
    setIsModalOpen(false);
  };
  // const history = useHistory();
  const containerVariants = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  // const navigateToHome = () => {
  //   history.push("/");
  // };

  return (
    <motion.section
      className="container-fluid custom-contact-main "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <CustomModal isOpen={isModalOpen} onClose={closeModal} />
      <section
        className="custom-contact-info d-flex justify-content-between p-3 "
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        {counts === 0 && (
          <div className="contact-close ">
            <IoClose color="white" />
          </div>
        )}
        <section className="w-50">
          <h3 className="h3 fw-bold text-light ">
            We'd <span className="h3 love-text fw-bolder ">love</span> to hear
            from you!!
          </h3>
          <p className="p lato text-light ">
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
                    <label
                      htmlFor="firstName fw-bold text-light"
                      className="text-light"
                    >
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
                    <label htmlFor="email fw-bold " className="text-light">
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
                    <label
                      htmlFor="contactNumber fw-bold"
                      className="text-light"
                    >
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
                    <label htmlFor="requirement fw-bold" className="text-light">
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
                    {/* <span className="lato respect-span">
                      We respect your privacy. We promise we won't spam you :)
                    </span> */}
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
      <div
        className="container-fluid d-flex justify-content-center flex-column align-items-center quote-container  "
        style={{
          backgroundImage: `url(${footercontact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "50vh",
          // width: "100vw", // Added this line
        }}
      >
        <div className="w-50 d-flex  flex-column justify-content-center align-items-center ">
          <h4 className="h4 text-light mont text-center mont mb-3">
            Let's talk about what we can build together
          </h4>
          <p className="p lato text-center lato">
            Whatever may be your requirement - be it a simple website design, a
            complex data driven web application development, an ecommerce
            website, a native or cross platform mobile app development, a logo
            and brand identity design, a video production or a full fledged
            digital marketing campaign - we have a solution for you.
          </p>
          {/* <button type="submit" className="design-btn fw-bolder mont">
          Design A Quote
        </button> */}
          <div className="water-fill-btn my-4" onClick={openModal}></div>
        </div>
      </div>
      {/* <section
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
      </section> */}
    </motion.section>
  );
};

export default ContactInfo;
