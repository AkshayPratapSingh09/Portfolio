"use client";

import Image from "next/image";
import './review.css'

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// const reviewsData = [
//   {
//     avatar: "/reviews/avatar-1.png",
//     name: " Richard Thompson",
//     job: "chef",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, molestiae! Expedita, numquam quos!",
//   },
//   {
//     avatar: "/reviews/avatar-2.png",
//     name: " Mason Wilson",
//     job: "Video Editor",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, molestiae! Expedita, numquam quos!",
//   },
//   {
//     avatar: "/reviews/avatar-5.png",
//     name: " Oliver Taylor",
//     job: "Engineer",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, molestiae! Expedita, numquam quos!",
//   },
//   {
//     avatar: "/reviews/avatar-4.png",
//     name: " Emily Smith",
//     job: "Therapist",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, molestiae! Expedita, numquam quos!",
//   },
//   {
//     avatar: "/reviews/avatar-3.png",
//     name: " John Doe ",
//     job: " Game Developer",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, molestiae! Expedita, numquam quos!",
//   },
//   {
//     avatar: "/reviews/avatar-6.png",
//     name: " Evelyn Anderson",
//     job: "interior designer",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, molestiae! Expedita, numquam quos!",
//   },
// ];
const certificates = [
  "./certificate/microsoft-1.png",
  "./certificate/microsoft-2.png",
  "./certificate/microsoft-3.png",
  "./certificate/deloitte.png",
  "./certificate/goldman.png",
  "./certificate/django.png",
  "./certificate/ibm.png",
  "./certificate/ibm_ai.png",
  "./certificate/optimization.png",
]

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-3">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Certifications</h2>
        {/* slider  */}
        <section >
	<div class="slider-wrapper">
		<div class="slider">
      {certificates.map((item)=>{
        console.log(item)
        return (
          <img id="slide-1" src={item} alt="3D rendering of an imaginary orange planet in space" />

        )
      })}
			{/* <img id="slide-2" src="./certificate/microsoft-2.png" alt="3D rendering of an imaginary green planet in space" />
			<img id="slide-3" src="./certificate/microsoft-3.png" alt="3D rendering of an imaginary green planet in space" />
			<img id="slide-3" src="https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="3D rendering of an imaginary blue planet in space" /> */}
		</div>
		<div class="slider-nav">
		<a href="#slide-1"></a>
			<a href="#slide-2"></a>
			<a href="#slide-3"></a> 
		</div>
	</div>
</section>
      </div>
    </section>
  );
};

export default Reviews;
