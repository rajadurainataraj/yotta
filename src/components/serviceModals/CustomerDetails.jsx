/* eslint-disable no-unused-vars */
import { count, serviceData } from "../utils/globalState.js";
import { useRecoilState } from "recoil";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const contactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  countryName: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  contactNumber: Yup.number()
    .typeError("Mobile number must be a number")
    .positive("Mobile number must be positive")
    .integer("Mobile number must be an integer")
    .required("Mobile number is required")
    .test(
      "len",
      "Mobile number must be exactly 10 digits",
      (val) => val.toString().length === 10
    ),
});

const CustomerDetails = () => {
  const [counts, setCounts] = useRecoilState(count);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const nextPage = () => {
    // setCounts(6);
  };

  return (
    <motion.div
      className=""
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <section className="d-flex flex-column  text-left my-4 container-fluid justify-content-center align-items-center ">
        <Formik
          initialValues={{
            firstName: "",
            email: "",
            countryName: "",
            contactNumber: "",
            address: "",
          }}
          validationSchema={contactSchema}
          onSubmit={(values) => {
            // same shape as initial values
            // setServiceDatas([...serviceDatas, { userDetails: values }]);
            const existingServicesIndex = serviceDatas.findIndex(
              (data) => "customerDetails" in data
            );
            if (existingServicesIndex !== -1) {
              // Replace existing services
              const newServiceDatas = [...serviceDatas];
              newServiceDatas[existingServicesIndex] = {
                customerDetails: { values },
              };
              setServiceDatas(newServiceDatas);
            } else {
              // Append new services
              setServiceDatas([
                ...serviceDatas,
                { customerDetails: { values } },
              ]);
            }
            setCounts(6);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="d-flex flex-column gap-4 custom-customer-form">
              <div className="d-flex flex-column  gap-1 fs-5 ">
                <div className="d-flex custom-customer-info  gap-3 align-items-center ">
                  <div className="fw-bold">Hi! Iam</div>
                  <Field
                    type="text"
                    name="firstName"
                    className="d-flex border-0 custom-input-customer  border-bottom"
                    placeholder="e.g Aurora"
                  />
                </div>
                <div className="errdiv text-danger custom-error-contact">
                  {errors.firstName && touched.firstName
                    ? errors.firstName
                    : null}
                </div>
              </div>
              <div className="d-flex flex-column   gap-1 fs-5 ">
                <div className="d-flex custom-customer-info align-items-center gap-3 fs-5 ">
                  <div className="fw-bold">Reach me at</div>
                  <Field
                    name="email"
                    type="email"
                    className="d-flex border-0 border-bottom custom-input-customer"
                    placeholder="e.g hello@gmail.com"
                  />
                </div>
                <div className="errdiv text-danger custom-error-contact ">
                  {errors.email && touched.email ? errors.email : null}
                </div>
              </div>
              <div className="d-flex flex-column gap-1 fs-5 ">
                <div className="d-flex custom-customer-info align-items-center gap-3 fs-5 ">
                  <div className="fw-bold">Country Name</div>
                  <Field
                    type="text"
                    name="countryName"
                    className="d-flex border-0 border-bottom custom-input-customer"
                    placeholder="e.g India"
                  />
                </div>
                <div className="errdiv text-danger custom-error-contact ">
                  {errors.countryName && touched.countryName
                    ? errors.countryName
                    : null}
                </div>
              </div>
              <div className="d-flex flex-column  gap-1 fs-5 ">
                <div className="d-flex  custom-customer-info align-items-center gap-3 fs-5 ">
                  <div className="fw-bold">Mobile No.</div>
                  <Field
                    name="contactNumber"
                    type="number"
                    className="d-flex border-0 border-bottom custom-input-customer"
                    placeholder="9876543210"
                  />
                </div>
                <div className="custom-error-contact text-danger errdiv">
                  {errors.contactNumber && touched.contactNumber
                    ? errors.contactNumber
                    : null}
                </div>
              </div>
              <div className="d-flex flex-column gap-1 fs-5 ">
                <div className="d-flex custom-customer-info align-items-center gap-3 fs-5 ">
                  <div className="fw-bold">Your Address</div>
                  <Field
                    type="text"
                    name="address"
                    className="d-flex border-0 border-bottom custom-input-customer"
                    placeholder="Your Address"
                  />
                </div>
                <div className="errdiv text-danger custom-error-contact ">
                  {errors.address && touched.address ? errors.address : null}
                </div>
              </div>
              <section className="d-flex justify-content-center align-items-center ">
                <button
                  type="submit"
                  className="btn btn-outline-dark custom-ouline-btn fw-bold fs-5 "
                  onClick={() => nextPage()}
                  disabled={isSubmitting || Object.keys(errors).length > 0}
                >
                  send
                </button>
              </section>
            </Form>
          )}
        </Formik>
      </section>
    </motion.div>
  );
};

export default CustomerDetails;
