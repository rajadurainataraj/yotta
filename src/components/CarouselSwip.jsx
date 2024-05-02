// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   EffectCoverflow,
// } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "../components/Swiper.css";
// import { ClientData } from "./datas";
// // import {} from "swiper";
// import slide_image_1 from "../assets/images/img_1.jpg";
// import slide_image_2 from "../assets/images/img_2.jpg";
// import slide_image_3 from "../assets/images/img_3.jpg";
// import slide_image_4 from "../assets/images/img_4.jpg";
// import slide_image_5 from "../assets/images/img_5.jpg";
// import slide_image_6 from "../assets/images/img_6.jpg";
// import slide_image_7 from "../assets/images/img_7.jpg";
// import { useRef } from "react";

// function CarouselSwip() {
//   const swiperRef = useRef(null);

//   const goNext = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slideNext();
//     }
//   };

//   const goPrev = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slidePrev();
//     }
//   };

//   return (
//     <div className="container prac-carousel">
//       <h1 className="heading">Flower Gallery</h1>
//       <Swiper
//         ref={swiperRef}
//         effect="coverflow"
//         grabCursor
//         centeredSlides
//         loop
//         slidesPerView="auto"
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ clickable: true }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         className="swiper_container"
//       >
//         {ClientData.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="cards-swipe">
//               <div className="card-content">
//                 <h3>{item.title}</h3>
//                 <p>{item.company}</p>
//                 <p>{item.review}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}

//         <div className="slider-controler">
//           <div className="swiper-button-prev slider-arrow" onClick={goPrev}>
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow" onClick={goNext}>
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// }

// export default CarouselSwip;
