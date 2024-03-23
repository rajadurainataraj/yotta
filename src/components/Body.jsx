import Hero from "./Hero";
import AboutUs from "./AboutUs";
import WhatWeDo from "./WhatWeDo";
import Digital from "./Digital";
import MeetOurTeam from "./MeetOurTeam";
import OurClients from "./OurClients";
import Technologies from "./Technologies";
import Reviews from "./Reviews";
// import Slider from "./Slider";
import Carousel from "./Carousel";
import Card from "./Card";
import ContactInfo from "./ContactInfo";
const Body = () => {
  return (
    <div className="custom-main-div">
      {/* <ContactInfo /> */}

      <Hero />
      <AboutUs />
      <WhatWeDo />
      <Digital />
      <MeetOurTeam />
      <OurClients />
      <Technologies />
      {/* <ContactInfo /> */}
      {/*   
      <MeetOurTeam /> */}
    </div>
  );
};

export default Body;
