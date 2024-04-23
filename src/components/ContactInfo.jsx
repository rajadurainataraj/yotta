/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Formik, Form, Field } from 'formik'

import * as Yup from 'yup'
import contactbg from '../assets/images/contact-info-img2.png'
import footercontact from '../assets/images/footercontact.png'
import contactBg from '../assets/images/contactBg.png'
import { IoClose } from 'react-icons/io5'
import { motion } from 'framer-motion'
import CustomModal from './CustomModal'
import GetQuote from './GetQuote'
import { useState } from 'react'

import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { count, modalOpen, serviceData } from './utils/globalState'
const contactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  requirement: Yup.string().required('Required'),
  contactNumber: Yup.number().required('Required'),
})

const ContactInfo = ({ onClose }) => {
  const [counts, setCounts] = useRecoilState(count)
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData)
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOpen)
  const navigate = useNavigate()

  const openModal = () => {
    setIsModalOpen(true)
    setCounts(1)
  }

  const closeModal = () => {
    setCounts(0)
    setServiceDatas([])

    setIsModalOpen(false)
  }
  // const history = useHistory();
  const containerVariants = {
    hidden: { opacity: 0, y: '-100vh' },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  }
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
      <>
        <section
          className="custom-contact-info d-flex justify-content-around p-3 "
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          {counts === 0 && (
            <div className="contact-close ">
              <IoClose
                className="icon-close-modal1  "
                onClick={() => onClose()}
              />
            </div>
          )}
          <section className="contact-info-subDiv">
            <h3 className="h3 fw-bold text-light ">
              We'd <span className="h3 love-text fw-bolder  ">love</span> to
              hear from you!!
            </h3>
            <p className="p lato text-light ">
              Brief us your requirements below, and let's connect.
            </p>

            <div>
              <Formik
                initialValues={{
                  firstName: '',
                  email: '',
                  requirement: '',
                  contactNumber: '', // Added contactNumber to initialValues
                }}
                validationSchema={contactSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  console.log(values)
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
                      <label
                        htmlFor="requirement fw-bold"
                        className="text-light"
                      >
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
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </section>

          <section className="customImg d-flex justify-content-center align-items-center">
            <img
              src={contactbg}
              className="contact-custom-img "
              alt="img-contact"
            />
          </section>
        </section>
        <GetQuote />
      </>

      {/* <div
        className="container-fluid d-flex justify-content-center flex-column align-items-center quote-container  "
        style={{
          backgroundImage: `url(${footercontact})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '50vh',
        }}
      >
        <div className="w-50 d-flex  flex-column justify-content-center align-items-center ">
          <h4 className="h4 text-light mont text-center mont mb-3 custom-contact-div">
            Let's talk about what we can build together
          </h4>
          <p className="p lato text-center lato custom-contact-div">
            Whatever may be your requirement - be it a simple website design, a
            complex data driven web application development, an ecommerce
            website, a native or cross platform mobile app development, a logo
            and brand identity design, a video production or a full fledged
            digital marketing campaign - we have a solution for you.
          </p>

          <div className="water-fill-btn my-4" onClick={openModal}></div>
        </div>
      </div> */}
    </motion.section>
  )
}

export default ContactInfo
