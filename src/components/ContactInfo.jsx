/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
// import { Alert, Button } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { count, modalOpen, serviceData } from "./utils/globalState";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import CustomModal from "./CustomModal";
import GetQuote from "./GetQuote";
import { useState } from "react";
import contactBg from "../assets/images/contactBg.png";
import imgContact from "../assets/images/bg-contact.png";
import Footer from "./footer/Footer";
import { TiTickOutline } from "react-icons/ti";
const contactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  requirement: Yup.string().required("Required"),
  contactNumber: Yup.number().required("Required"),
});

const ContactInfo = ({ onClose }) => {
  const [counts, setCounts] = useRecoilState(count);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOpen);
  const navigate = useNavigate();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setCounts(1);
  };

  const closeModal = () => {
    setCounts(0);
    setServiceDatas([]);

    setIsModalOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      className="container-fluid custom-contact-main"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <CustomModal isOpen={isModalOpen} onClose={closeModal} />
      <>
        <section
          className="custom-contact-info d-flex justify-content-around p-3"
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          {counts === 0 && (
            <div className="contact-close" onClick={() => onClose()}>
              <IoClose className="icon-close-modal1" />
            </div>
          )}
          <section className="contact-info-subDiv">
            <h3 className="h3 fw-bold text-light">
              We'd <span className="h3 love-text fw-bolder">love</span> to hear
              from you!!
            </h3>
            <p className="p lato text-light">
              Brief us your requirements below, and let's connect.
            </p>

            <div>
              <Formik
                initialValues={{
                  firstName: "",
                  email: "",
                  requirement: "",
                  contactNumber: "",
                }}
                validationSchema={contactSchema}
                onSubmit={(values, { setSubmitting, setStatus, resetForm }) => {
                  setShowSuccessAlert(true);
                  setStatus({ success: true });
                  setTimeout(() => {
                    // setShowSuccessAlert(false);
                    setStatus({ success: false });
                    resetForm();
                    // setSubmitting(false);
                  }, 2000);
                  console.log(values);
                }}
              >
                {({ errors, touched, isSubmitting, status }) => (
                  <Form>
                    <div className="d-flex flex-column">
                      <label htmlFor="firstName" className="text-light">
                        Your name <span className="text-danger">*</span>
                      </label>
                      <Field name="firstName" placeholder="Enter your name" />
                      <div className="custom-error-contact text-danger errdiv">
                        {errors.firstName && touched.firstName
                          ? errors.firstName
                          : null}
                      </div>
                    </div>
                    <div className="d-flex flex-column">
                      <label htmlFor="email" className="text-light">
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
                    <div className="d-flex flex-column">
                      <label htmlFor="contactNumber" className="text-light">
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
                    <div className="d-flex flex-column">
                      <label htmlFor="requirement" className="text-light">
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
                    <div className="my-2 d-flex flex-column">
                      <button
                        type="submit"
                        className={`my-1 border-0 ${
                          status?.success
                            ? "custom-contact-info-success"
                            : "custom-btn-contactinfo"
                        } text-light ${isSubmitting ? "disabled" : ""}`}
                        disabled={isSubmitting}
                      >
                        {status?.success ? (
                          <>
                            Success <TiTickOutline color="white" />
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                      {/* {showSuccessAlert && (
                        <div className="text-center">
                          <Alert
                            variant="success"
                            className="fade"
                            id="alert-success"
                            onClose={() => setShowSuccessAlert(false)}
                          >
                            We wil get back you soon
                          </Alert>
                        </div>
                      )} */}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </section>

          <section className="customImg d-flex justify-content-center align-items-center">
            <img
              src={imgContact}
              className="contact-custom-img"
              alt="img-contact"
            />
          </section>
        </section>

        <GetQuote />
      </>
      <Footer />
    </motion.section>
  );
};

export default ContactInfo;
