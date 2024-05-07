/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRecoilState } from "recoil";
import thankyou from "../../assets/images/thanku.png";
import {
  count,
  estimatedBudgets,
  projectDescriptions,
  projectTypes,
  selectedService,
  serviceData,
  socialService,
  websiteTypeState,
  referenceWebsites,
  getCourseInput,
} from "../utils/globalState";
import { motion } from "framer-motion";

const ThankYou = ({ onClose }) => {
  const [counts, setCounts] = useRecoilState(count);
  const [serviceDatas, setServiceDatas] = useRecoilState(serviceData);
  const [selectedServices, setSelectedServices] =
    useRecoilState(selectedService);
  const [inputValue, setInputValue] = useRecoilState(estimatedBudgets);
  const [inputValuePD, setInputValuePD] = useRecoilState(projectDescriptions);
  const [projectType, setProjectType] = useRecoilState(projectTypes);
  const [referenceWebsite, setReferenceWebsite] =
    useRecoilState(referenceWebsites);
  const [socialServices, setSocialServices] = useRecoilState(socialService);
  const [websiteTypeStates, setWebsiteTypeState] =
    useRecoilState(websiteTypeState);
  const [getCourseInputs, setCoureInputs] = useRecoilState(getCourseInput);
  const closeThePage = () => {
    setCounts(0);
    setServiceDatas([]);
    setSelectedServices([]);
    setInputValue("");
    setInputValuePD("");
    setProjectType([]);
    setReferenceWebsite("");
    setSocialServices([]);
    setWebsiteTypeState([]);
    getCourseInputs("");
    onClose();
  };
  console.log(serviceDatas);
  return (
    // <motion.div
    //   className=""
    //   initial={{ y: "100%", opacity: 0 }}
    //   animate={{ y: 0, opacity: 1 }}
    //   transition={{ duration: 0.7 }}
    // >
    <section className="d-flex flex-column justify-content-center  align-items-center thanks-container container-fluid ">
      <img src={thankyou} alt="thankyou" />
      <h3 className="h2 mb-2 mt-3 mont fw-bold"> Thank you!</h3>
      <p className="p lato fs-3 fw-bold text-dark fw-bolder">
        Will get back to you soon.
      </p>
      <button
        className="btn btn-outline-dark custom-ouline-btn fw-bold fs-5 "
        onClick={() => closeThePage()}
      >
        Okay
      </button>
    </section>
    // </motion.div>
  );
};

export default ThankYou;
