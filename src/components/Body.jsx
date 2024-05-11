/* eslint-disable no-unused-vars */
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import WhatWeDo from "./WhatWeDo";
import Digital from "./Digital";
import MeetOurTeam from "./MeetOurTeam";
import OurClients from "./OurClients";

// import Slider from "./Slider";

import Card from "./Card";
import ContactInfo from "./ContactInfo";
import Technologies2 from "./Technologies2";
// import CarouselSwip from "./CarouselSwip";
import Footer from "./footer/Footer";
import GetQuote from "./GetQuote";
import CompanyReview from "./CompanyReview";
import { useRecoilState } from "recoil";
import { count } from "./utils/globalState";
const Body = () => {
  const [counts, setCounts] = useRecoilState(count);
  return (
    <div className={`custom-main-div ${counts !== 0 && "bg-light"}`}>
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <Digital />
      <MeetOurTeam />
      <OurClients />
      <CompanyReview />
      <Technologies2 />
      <GetQuote />
    </div>
  );
};

export default Body;
