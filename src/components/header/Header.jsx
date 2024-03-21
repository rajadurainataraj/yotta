import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/yws-logo.png";
import Contact from "../Contact";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("Home");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavItemSelect = (item) => {
    setSelectedNavItem(item);
  };

  const handleContactOpen = () => {
    setIsContactOpen(true);
  };

  const handleContactClose = () => {
    setIsContactOpen(false);
  };

  const handleNavItemSelects = (item) => {
    setSelectedNavItem(item);

    if (item === "About") {
      navigate("/");
      const scrollPosition = window.innerHeight * 0.84;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* // d-none d-xl-block */}
      <nav className="navbar navbar-expand-lg px-5 custom-nav container-fluid">
        <div className="d-flex">
          <Link to="/">
            <img src={logo} width="72vw" alt="" className="me-1" />
          </Link>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item nav-header-container d-sm-block d-xl-block ">
              <a
                className="nav-link fs-3 nav-header text-dark fw-bolder"
                href="/"
              >
                Yotta Web Services
              </a>
              <p>Enlighten the Dark Data</p>
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse custom-navv me-auto"
          id="navbarSupportedContent"
        >
          <div className="d-flex fs-6">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className={`nav-item ${
                  selectedNavItem === "Home" ? "active" : ""
                }`}
              >
                <a
                  className="nav-link mx-3"
                  href="/"
                  onClick={() => handleNavItemSelect("Home")}
                  style={{
                    color: location.pathname === "/" ? "blue !important" : "",
                  }}
                >
                  Home
                </a>
              </li>
              <li
                className={`nav-item dropdown mx-2 ${
                  selectedNavItem === "Services" ? "active" : ""
                }`}
              >
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => handleNavItemSelect("Services")}
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={"services" + "/customsoftware"}>
                      <a className="dropdown-item">Custom Software</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"services" + "/digitalmarketing"}>
                      <a className="dropdown-item">Digital Marketing</a>
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item">
                      <Link to={"services" + "/mobileapplication"}>
                        Mobile Application
                      </Link>
                    </a>
                  </li>
                  <li>
                    <Link to={"services" + "/website"}>
                      <a className="dropdown-item">Website</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"services" + "/trainingandinternships"}>
                      <a className="dropdown-item">Training & Internships</a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"services" + "/uiuxdesign"}>
                      <a className="dropdown-item">UI/UX design</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={`nav-item mx-2 ${
                  selectedNavItem === "Careers" ? "active" : ""
                }`}
              >
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleNavItemSelect("Careers")}
                  style={{
                    color: selectedNavItem === "Careers" ? "blue" : "",
                  }}
                >
                  Careers
                </a>
              </li>
              <li
                className={`nav-item mx-2 ${
                  selectedNavItem === "About" ? "active" : ""
                }`}
              >
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleNavItemSelects("About")}
                  style={{ color: selectedNavItem === "About" ? "blue" : "" }}
                >
                  About
                </a>
              </li>

              <li
                className={`nav-item mx-2 ${
                  selectedNavItem === "Contact Us" ? "active" : ""
                }`}
                onClick={handleContactOpen}
              >
                <span className="nav-link">Contact Us</span>
              </li>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </nav>
      {isContactOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <Contact />

            <div
              className="contact-close custom-icon-contact fw-bolder border-2"
              onClick={handleContactClose}
            >
              <IoCloseSharp color="white" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
