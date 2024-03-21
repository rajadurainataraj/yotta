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
const Body = () => {
  const data = [
    {
      title: "Harini",
      company: "CEO, Hashigo Technologies",
      review:
        "Working with YWS has been an absolute pleasure Their dedication, professionalism, and attention to detail have truly impressed me. I highly recommend YWS team for any project and look forward to collaborating with them again in the future!",
    },
    {
      title: "Bala",
      company: "CEO, Enterot",
      review:
        "They are providing good services in web development in enterprise level projects. Timely delivery of products with no compromise to quality.Recommendable for developing web apps in budget!",
    },
    {
      title: "sathish",
      company: "CEO, Test Your Matrics",
      review:
        "Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend this team for startups, who want to spend more time on customers instead of technical developments.",
    },
  ];
  return (
    <div className="custom-main-div">
      <div>
        {data.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            title={item.title}
            review={item.review}
          />
        ))}
      </div>
      {/* <Carousel /> */}
      {/* <Hero />
      <AboutUs />
      <WhatWeDo />
      <Digital />
      <MeetOurTeam />
      <OurClients />
      <Technologies /> */}
    </div>
  );
};

export default Body;
