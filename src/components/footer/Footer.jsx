import logo from '../../assets/logo/yws-logo.png'
import { TfiEmail } from 'react-icons/tfi'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { GrFacebookOption } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="container-fluid footer mt-auto">
      <section className="d-flex justify-content-between footer-main-wrapper px-5 mb-2 pt-5 d-sm">
        <section className="footer-sub-wrapper">
          {/* <div className="d-flex custom-head">
            <a href="#">
              <img src={logo} width="72vw" alt="" />
            </a>
            <ul className="footer-ul">
              <li className="footer-container d-none d-xl-block ">
                <a
                  className="nav-link active fs-3 "
                  aria-current="page"
                  href="#"
                >
                  Yotta Web Services
                </a>
                <span>Enlighten the Dark Data</span>
              </li>
            </ul>
          </div> */}
          <div className="d-flex">
            <Link to="/">
              <img src={logo} width="72vw" alt="" className="me-1" />
            </Link>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item nav-header-container d-sm-block d-xl-block ">
                <a
                  className="nav-link fs-4 nav-header text-dark fw-bolder"
                  href="/"
                >
                  Yotta Web Services
                </a>
                <p className="sub-logo-title">Enlighten the Dark Data</p>
              </li>
            </ul>
          </div>
          <div className="footer-content mt-5">
            <div className="fs-4 lato">Thank you for your support!</div>
            <span className="fs-6">We deliver the best web products</span>
          </div>
        </section>
        <section className="d-flex d-b-mx-5 custom-footer-menus gap-5">
          {/* <section className="d-sm-flex flex-column mx-5"> */}
          <section>
            <div className="footer-middle-container pb-2">
              <div className="footer-company py-1">Company</div>
              <div className="footer-about">About Us</div>
              <div className="footer-blog">Blog</div>
            </div>
            <div className="footer-middle-container pb-2">
              <div className="footer-company py-1">
                Help <span className="and-symbol">&</span> Support
              </div>
              <div className="footer-about">Contact Us</div>
              <div className="footer-blog">Custom Developement</div>
            </div>
            <div className="footer-middle-container pb-2">
              <div className="footer-company py-1">Legal</div>
              <div className="footer-about">
                Terms <span className="and-symbol"> & </span>Conditions
              </div>
              <div className="footer-blog">Privacy policy</div>
            </div>
          </section>
          <section className="d-b-px-5">
            <div className="footer-company py-1">Contact Us</div>
            <div className="d-flex flex-column align-items-start py-3 footer-contact">
              <a href="mailto:example@example.com">
                <div className="d-flex align-items-center justify-content-center text-center">
                  <div className="rounded-circle text-#0178BE d-flex justify-content-center align-items-center border-color-custom me-2">
                    <TfiEmail size={15} color="#0178BE" />
                  </div>
                  <span className="hover-color">hr@yottawebservices.in</span>
                </div>
              </a>
              <div className="d-flex align-items-center justify-content-center text-center py-3">
                <div className="rounded-circle text-#0178BE d-flex justify-content-center align-items-center border-color-custom me-2">
                  <TbWorld size={15} color="#0178BE" />
                </div>
                <span className="hover-color">yottawebservices.in</span>
              </div>

              <a href="tel:+919944458897">
                <div className="d-flex align-items-center justify-content-center text-center ">
                  <div className="rounded-circle text-#0178BE d-flex justify-content-center align-items-center border-color-custom me-2">
                    <FaPhone size={15} color="#0178BE" />
                  </div>
                  <span className="hover-color">+91 99444 58897</span>
                </div>
              </a>
              <div className="mt-3">
                <h6 className="f-5  fw-bold py-2">Find us on</h6>
                <div>
                  <div
                    className="d-flex justify-content-around align-items-center"
                    style={{ width: '200px' }}
                  >
                    <a
                      href="https://www.instagram.com/yottawebservices"
                      target="_blank"
                    >
                      <div className="instagram-icon">
                        <FaInstagram color="#fff" size={17} />
                      </div>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100083235555354"
                      target="_blank"
                    >
                      <div
                        className="rounded-circle facebook-footer d-inline-flex justify-content-center align-items-center"
                        style={{ width: '35px', height: '35px' }}
                      >
                        <GrFacebookOption color="#fff" size={17} />
                      </div>
                    </a>
                    <div
                      className="rounded-circle bg-dark d-inline-flex justify-content-center align-items-center"
                      style={{ width: '35px', height: '35px' }}
                    >
                      <FaXTwitter color="#fff" size={17} />
                    </div>
                    <a
                      href="https://www.linkedin.com/company/yotta-web-services/"
                      target="_blank"
                    >
                      <div
                        className="rounded-circle linkedin-footer d-inline-flex justify-content-center align-items-center"
                        style={{ width: '35px', height: '35px' }}
                      >
                        <FaLinkedin color="#fff" size={17} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
      <div className="container-fluid text-center bottom-container">
        <span className="text-muted ">
          ©2024 All rights reserved to Yotta Web Services | Terms
          <span span className="and-symbol">
            &
          </span>
          Conditions | Privacy Policy
        </span>
      </div>
    </footer>
  )
}

export default Footer
