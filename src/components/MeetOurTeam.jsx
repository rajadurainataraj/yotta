import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { team } from "./datas";

const MeetOurTeam = () => {
  return (
    <section className="py-4 container-fluid meet-our-team pt-5">
      <h3 className="content-header text-center ">Meet Our Team</h3>
      <div className="scroll-container pt-3">
        <div
          className="d-flex custom-cards gap-5 "
          style={{
            marginRight: "20px",
            paddingRight: "100px",
          }}
        >
          {team.map((profile) => (
            <div
              className="mx-2 custom-card text-center"
              key={profile?.name}
              style={{}}
            >
              <img
                src={profile?.image}
                alt="Jayalakshmi L"
                className="card-img"
              />
              <h5 className="card-header text-center mt-3">{profile?.name}</h5>
              <p>{profile?.role}</p>
              <div className="d-flex text-center justify-content-center gap-3 align-items-center icon-zoom">
                {profile.liLink ? (
                  <a target="_blank" href={profile?.liLink}>
                    <FaLinkedinIn />
                  </a>
                ) : (
                  <FaLinkedinIn />
                )}

                {profile.fbLink ? (
                  <a target="_blank" href={profile?.fbLink}>
                    <FaFacebookF />
                  </a>
                ) : (
                  <FaFacebookF />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
