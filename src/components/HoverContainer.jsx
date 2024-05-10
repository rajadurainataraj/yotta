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
    <section className="container-fluid custom-service-home">
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
    </section>
  );
};

export default HoverContainer;
