import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { team } from "./datas";
const MeetOurTeam = () => {
  return (
    <section className="py-5 container-fluid">
      <h3 className="content-header text-center py-3">Meet Our Team</h3>
      <div className="scroll-container pt-5">
        <div
          className="d-flex custom-cards gap-5"
          style={{ marginRight: "20px" }}
        >
          {team.map((profile) => (
            <div className="mx-2 custom-card text-center" key={profile?.name}>
              <img src={profile?.image} alt="Rajeswari" className="card-img" />
              <h5 className="card-header text-center mt-3">{profile?.name}</h5>
              <p>{profile?.role}</p>
              <div className="d-flex text-center justify-content-center gap-3">
                <a target="_blank" src={profile?.fbLink}>
                  <FaLinkedinIn />
                </a>
                <a target="_blank" src={profile?.liLink}>
                  <FaFacebookF />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
