// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import computer from "../assets/images/computer.png";
// import { BsTelephoneFill } from "react-icons/bs";
// import { IoLogoInstagram, IoLocationOutline } from "react-icons/io5";
// import { motion } from "framer-motion";

// const Contact = () => {
//   const sectionStyle = {
//     backgroundImage: `url(${computer})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "100vh",
//     color: "white",
//     minHeight: "600px",
//   };

//   const containerVariants = {
//     hidden: { opacity: 0, y: "-100vh" },
//     visible: { opacity: 1, y: 0, transition: { duration: 1 } },
//   };

//   const initialValues = {
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   };
//   // let message = "";

//   const validationSchema = Yup.object({
//     name: Yup.string().required("Required"),
//     email: Yup.string().email("Invalid email address").required("Required"),
//     phone: Yup.string()
//       .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Invalid phone number")
//       .required("Required"),
//     message: Yup.string().required("Required"),
//   });

//   const handleSubmit = (values, { setSubmitting }) => {

//     setSubmitting(false);
//   };

//   return (
//     <motion.section
//       style={sectionStyle}
//       className="d-flex flex-column justify-content-center align-items-center custom-contact-container"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form className="container-fluid d-flex custom-contact justify-content-evenly">
//           <section>
//             <h3 className="display-5">Contact Us</h3>
//             <div className="d-flex gap-3  align-items-center py-3">
//               <div className="custom-icon-contact">
//                 <BsTelephoneFill color="white" />
//               </div>
//               <h3 className="contact-heading">Telephone</h3>
//             </div>
//             <p className=" display-4 ">+91 99444 58897</p>
//             <p className=" display-4 ">O422-7962105</p>
//             <div className="d-flex gap-3 align-items-center py-3">
//               <div className="custom-icon-contact">
//                 <IoLogoInstagram color="white" />
//               </div>
//               <h3 className="contact-heading">Instagram</h3>
//             </div>
//             <p>yottawebservices</p>
//             <div className="d-flex gap-3  align-items-center py-3">
//               <div className="custom-icon-contact">
//                 <IoLocationOutline color="white" />
//               </div>
//               <h3 className="contact-heading">Locate Us</h3>
//             </div>
//             <p className=" display-4 "> 30/31,West Street-2,</p>
//             <p className=" display-4 ">MasakaliPalyam,</p>{" "}
//             <p className=" display-4 ">Coimbatore - 641015,TamilNadu</p>
//           </section>
//           <section className="d-flex flex-column gap-5 form-group py-4">
//             <div className="d-flex flex-column  gap-3">
//               <Field
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 className="form-control py-2"
//               />

//               {/* {message} */}
//               <ErrorMessage name="name">
//                 {(msg) => <div className="text-danger">{msg}</div>}
//               </ErrorMessage>
//             </div>
//             <div className="d-flex flex-column  gap-3">
//               <Field
//                 type="text"
//                 name="email"
//                 placeholder="Email Address"
//                 className="form-control py-2"
//               />
//               <ErrorMessage name="email">
//                 {(msg) => <div className="text-danger">{msg}</div>}
//               </ErrorMessage>
//             </div>
//             <div className="d-flex flex-column  gap-3">
//               <Field
//                 type="text"
//                 name="phone"
//                 placeholder="Phone"
//                 className="form-control py-2"
//               />
//               <ErrorMessage name="phone">
//                 {(msg) => <div className="text-danger">{msg}</div>}
//               </ErrorMessage>
//             </div>
//             <div className="d-flex flex-column  gap-3">
//               <Field
//                 as="textarea"
//                 name="message"
//                 placeholder="Your Message"
//                 className="form-control py-2 text-area-contact"
//               />
//               <ErrorMessage name="message">
//                 {(msg) => <div className="text-danger">{msg}</div>}
//               </ErrorMessage>
//             </div>
//             <button
//               type="submit"
//               className="btn btn-primary w-50 d-flex align-self-center py-3  justify-content-center"
//             >
//               Send Message
//             </button>
//           </section>
//         </Form>
//       </Formik>
//     </motion.section>
//   );
// };

// export default Contact;
