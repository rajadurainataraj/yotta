/* eslint-disable react/no-unescaped-entities */
import { FaPhone } from "react-icons/fa6";
import careerImg from "../assets/images/career-img.png";
import { careerOpenings } from "./datas";
import { IoLocation } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

import phoneicon from "../assets/images/phone-icon-career.png";

const Careers = () => {
  return (
    <section className="careers-main-wrapper">
      <section className="d-flex">
        <section className="d-flex flex-column  justify-content-start sub-career-main">
          <div className="content-header mont career-header1">
            Careers @ YWS
          </div>
          <div className="career-para lato">
            Ready to take the leap! Reach us and be the first to know about
            future opportunities and what's happening at Yotta Web Services.
          </div>
          <div className="lato">
            <div className="d-flex mt-3 gap-2 align-items-center ">
              {/* <div className="round-phone d-flex justify-content-center align-items-center">
                <FaPhone color="white" />
              </div> */}
              <img src={phoneicon} alt="phone" className="round-phone" />
              <div className="d-flex flex-column number-container lato">
                <div>+91 994 445 8897</div>
                <span className="lato">Call for any Questions</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <img src={careerImg} alt="careerimg" className="career-img" />
        </section>
      </section>
      <section className="d-flex justify-content-between my-4 lato tech-container-career">
        {careerOpenings.map((item) => (
          <section key={item.tech} className="d-flex flex-column gap-1  ">
            <div className="tech-icon-marge">
              <img src={item.icon} alt="" className="icon-tech-career" />

              <div className="career-tech">{item.tech}</div>
            </div>
            <div className="d-flex gap-2  ">
              <div className="d-flex gap-1 align-items-center">
                <IoLocationOutline color="rgba(255, 74, 0, 1)" />
                <span className="loation-career">Coimbatore,india</span>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <AiOutlineClockCircle color="rgba(255, 74, 0, 1)" />
                <span className="loation-career ">Full-time</span>
              </div>
            </div>
          </section>
        ))}
      </section>
      <section className="career-reach-us px-4 pt-3 lato">
        <section className="py-3 reach-wrapper">
          <div className="reach-us-heading">
            Wish to become a part of our fun-loving teams? Reach us now!
          </div>
          <div className="d-flex my-5 gap-3 justify-content-around custom-career-reachout">
            <div className="d-flex flex-column gap-2 align-items-center reachout ">
              <FaMobileScreenButton />
              <a href="tel:+919944458897" className="text-white">
                <div className="contact-career">+91-9944458897</div>
              </a>
            </div>
            <div className="d-flex flex-column gap-2 align-items-center reachout">
              <FaPhone />
              <a href="tel:04227962105" className="text-white">
                <div className="contact-career">0422-7962105</div>
              </a>
            </div>
            <div className="d-flex flex-column gap-2 align-items-center reachout">
              <MdMailOutline />
              <a href="mailto:example@example.com" className="text-white">
                <div className="contact-career">hr@yottawebservices.in</div>
              </a>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
export default Careers;
