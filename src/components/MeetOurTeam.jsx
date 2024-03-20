import mathan from "../assets/images/mathan.jpg";
import raja from "../assets/images/raja.jpg";
import rajeswari from "../assets/images/rajeshwari.jpg";
import mithun from "../assets/images/mithun.jpg";
import sowmiya from "../assets/images/sowmiya.jpg";
import hari from "../assets/images/hari.jpg";
import vaisak from "../assets/images/vaisak.jpg";
import jaya from "../assets/images/jaya.jpg";
import venkatesh from "../assets/images/venkatesh.jpg";
import soundarya from "../assets/images/soundarya.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const MeetOurTeam = () => {
  return (
    <section className="py-5 ">
      <h3 className="content-header text-center py-3">Meet Our Team</h3>
      <div className="scroll-container pt-5">
        <div
          className="d-flex custom-cards gap-5"
          style={{ marginRight: "20px" }}
        >
          <div className="mx-2 custom-card text-center">
            <img src={rajeswari} alt="Rajeswari" className="card-img" />
            <h5 className="card-header text-center mt-3">Rajeswari</h5>
            <p>Business Analyst</p>
            <div className="d-flex text-center justify-content-center gap-3">
              <FaLinkedinIn />
              <FaFacebookF />
            </div>
          </div>
          <div className="mx-2 custom-card text-center">
            <img src={vaisak} alt="Vaisak" className="card-img" />
            <h5 className="card-header text-center mt-3">Vaisak</h5>
            <p>Admin & Accountant</p>
            <div className="d-flex text-center justify-content-center gap-3 ">
              <FaLinkedinIn />
              <FaFacebookF />
            </div>
          </div>
          <div className="mx-2 custom-card text-center ">
            <img src={mathan} alt="Mathan" className="card-img" />
            <h5 className="card-header text-center mt-3">Mathan</h5>
            <p>Associate project coordinator</p>
            <div className="d-flex text-center justify-content-center gap-3 ">
              <FaLinkedinIn />
              <FaFacebookF />
            </div>
          </div>
          <div className="mx-2 custom-card text-center">
            <img src={raja} alt="Raja" className="card-img" />
            <h5 className="card-header text-center mt-3">Raja</h5>
            <p>FrontEnd Developer</p>
            <div className="d-flex text-center justify-content-center gap-3 ">
              <FaLinkedinIn />
              <FaFacebookF />
            </div>
          </div>

          <div className="mx-2 custom-card text-center">
            <img src={sowmiya} alt="Sowmiya" className="card-img" />
            <h5 className="card-header text-center mt-3">Sowmiya</h5>
            <p>UI/UX Designer</p>
            <div className="d-flex text-center justify-content-center gap-3 ">
              <FaLinkedinIn />
              <FaFacebookF />
            </div>
          </div>

          <div className="mx-2 custom-card text-center ">
            <img src={jaya} alt="Vaisak" className="card-img" />
            <h5 className="card-header text-center mt-3">Jaya Pandey</h5>
            <p>UI/UX Designer</p>
            <div className="d-flex text-center justify-content-center gap-3 ">
              <FaLinkedinIn />
              <FaFacebookF />
            </div>
          </div>
          <div className="mx-2 custom-card text-center">
            <img src={hari} alt="Hari" className="card-img" />
            <h5 className="card-header text-center mt-3">Hari</h5>
            <p>Intern</p>
            <div className="d-flex text-center justify-content-center gap-3 ">
              <FaLinkedinIn />
              <FaFacebookF />
            </div>
          </div>
          <div className="mx-2 custom-card text-center">
            <img src={mithun} alt="Mithun" className="card-img" />
            <h5 className="card-header text-center mt-3">Mithun</h5>
            <p>Intern</p>
            <div className="d-flex text-center justify-content-center gap-3 ">
              <FaLinkedinIn />
              <FaFacebookF />
            </div>
          </div>
          <div className="mx-2 custom-card text-center">
            <img src={venkatesh} alt="Mithun" className="card-img" />
            <h5 className="card-header text-center mt-3">Venkatesan</h5>
            <p>Intern</p>
            <div className="d-flex text-center justify-content-center gap-3 ">
              <FaLinkedinIn />
              <FaFacebookF />
            </div>
          </div>
          <div className="mx-2 custom-card text-center">
            <img src={soundarya} alt="Mithun" className="card-img" />
            <h5 className="card-header text-center mt-3">soundarya</h5>
            <p>Intern</p>
            <div className="d-flex text-center justify-content-center gap-3 ">
              <FaLinkedinIn />
              <FaFacebookF />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
