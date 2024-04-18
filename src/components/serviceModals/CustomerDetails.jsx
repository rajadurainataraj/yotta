/* eslint-disable no-unused-vars */
import { count, serviceData } from "../utils/globalState.js";
import { useRecoilState } from "recoil";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  countryName: Yup.string().required("Required"),
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
  console.log(serviceDatas);
  return (
    <section className="d-flex flex-column  text-left my-4 container-fluid justify-content-center align-items-center ">
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          countryName: "",
          contactNumber: "", // Added contactNumber to initialValues
        }}
        validationSchema={contactSchema}
        onSubmit={(values) => {
          // same shape as initial values
          setServiceDatas([...serviceDatas, { userDetails: values }]);

          setCounts(6);
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="d-flex flex-column gap-4 ">
            <div className="d-flex flex-column  gap-1 fs-5 ">
              <div className="d-flex  gap-3 align-items-center">
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
            <div className="d-flex flex-column  gap-1 fs-5 ">
              <div className="d-flex  align-items-center gap-3 fs-5 ">
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
              <div className="d-flex  align-items-center gap-3 fs-5 ">
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
              <div className="d-flex  align-items-center gap-3 fs-5 ">
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
            <section className="d-flex justify-content-center align-items-center ">
              <button
                type="submit"
                className="btn btn-outline-dark custom-ouline-btn fw-bold fs-5 "
                onClick={() => nextPage()}
              >
                send
              </button>
            </section>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default CustomerDetails;
