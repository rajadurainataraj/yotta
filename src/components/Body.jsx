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
import Technologies2 from "./Technologies2";
import CarouselSwip from "./CarouselSwip";

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
      <Technologies2 />
      {/* <GetQuote /> */}

      {/* <GetQuoteService /> */}
      {/* <ThankYou /> */}
      {/* <ContactInfo /> */}
      {/*   
      <MeetOurTeam /> */}
      {/* <CarouselSwip /> */}
    </div>
  );
};

export default Body;
