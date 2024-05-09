/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
// import { FaArrowRightLong } from "react-icons/fa6";
import { allData } from "./datas";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../assets/images/arrow-icon.png";

const HoverContainer = ({ title, direction }) => {
  const propsData = title.title;
  let propsValue = title.title.trim().toLowerCase().replace(/ +/g, "");
  const navigate = useNavigate();

  const data = allData.find((item) => item.id === propsValue);
  const moreContent = () => {
    propsValue === "training&internships"
      ? (propsValue = "trainingandinternships")
      : propsValue === "ui/ux"
      ? (propsValue = "uiuxdesign")
      : propsValue === "websites"
      ? (propsValue = "website")
      : "";

    navigate("/services/" + propsValue);
  };
  return (
    <section className="container-fluid pe-5 custom-service-home">
      {/* <motion.div
        className="hover-info"
        initial={
          direction === "left"
            ? { x: "100%", opacity: 0 }
            : { x: "-100%", opacity: 0 }
        }
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      > */}
      <div className="hover-info">
        <div className="service-headers text-black p-4"> {propsData}</div>
        <section className="">
          <div className="">
            <p className="service-paras-home p px-4">{data?.content}</p>
          </div>
          <div
            className="text-white custom-learnmore-btn my-5 ms-4 cursor-pointer gap-3  "
            onClick={() => moreContent()}
          >
            <span>Learn More</span> <img src={arrowIcon} alt="" />
            {/* <FaArrowRightLong color="white" /> */}
          </div>
        </section>
      </div>
      {/* </motion.div> */}
    </section>
    // </motion.div>
  );
};

export default HoverContainer;
