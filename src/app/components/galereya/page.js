// 'use client';
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Link from 'next/link';
// import 'swiper/css/navigation';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import { EffectCoverflow, Navigation } from 'swiper/modules';

// const slidesData = [
//   {
//     img: '/temirmaxsulot/darvoza/darvoza19.jpg',
//     alt: 'Darvoza',
//   },
//   {
//     img: '/temirmaxsulot/darvoza/darvoza20.jpg',
//     alt: 'Darvoza',
//   },
//   {
//     img: '/temirmaxsulot/darvoza/darvoza29.jpg',
//     alt: 'Darvoza',
//   },
//   {
//     img: '/temirmaxsulot/darvoza/darvoza30.jpg',
//     alt: 'Darvoza',
//   },
//   {
//     img: '/temirmaxsulot/darvoza/darvoza31.jpg',
//     alt: 'Darvoza',
//   },
//   {
//     img: '/temirmaxsulot/darvoza/darvoza32.jpg',
//     alt: 'Darvoza',
//   },
//   {
//     img: '/temirmaxsulot/darvoza/darvoza33.jpg',
//     alt: 'Darvoza',
//   },
//   {
//     img: '/temirmaxsulot/darvoza/darvoza34.jpg',
//     alt: 'Darvoza',
//   },
//   {
//     img: '/temirmaxsulot/darvoza/darvoza35.jpg',
//     alt: 'Darvoza',
//   },
//   {
//     img: '/temirmaxsulot/darvoza/darvoza36.jpg',
//     alt: 'Darvoza',
//   },
//   {
//     img: '/temirmaxsulot/darvoza/darvoza37.jpg',
//     alt: 'Darvoza',
//   },
//   {
//     img: '/temirmaxsulot/darvoza/darvoza38.jpg',
//     alt: 'Darvoza',
//   },
//   {
//     img: '/temirmaxsulot/darvoza/darvoza39.jpg',
//     alt: 'Darvoza',
//   },
//   {
//     img: '/temirmaxsulot/darvoza/darvoza40.jpg',
//     alt: 'Darvoza',
//   },
//   {
//     img: '/temirmaxsulot/darvoza/darvoza.jpg',
//     alt: 'Darvoza',
//   },
// ];

// // == STYLE == //

// const SectionWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-height: 100vh;
//   background-image: url('/temirMaxsulot/darvoza/darvozaFon6.jpg');
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;
//   position: relative;
//   padding: 3rem;
//   box-sizing: border-box;
// `;

// const SectionHero = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   /* background-color: red; */
//   height: 50rem;

//   img{
//     /* width: 100%;
//     height: 100%;
//     object-fit: contain; */
//   }
// `;

// const InfoText = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: auto;
//   padding: 2rem 5rem;
//   text-align: center;
//   background-color: aquamarine;

//   h2 {
//     width: 80%;

//     font-size: 1.3rem;
//     color: #302e2eff;
//     letter-spacing: 0.01rem;
//   }
// `;

// const GallerySection = styled.section`
//   width: 100%;
//   min-height: 100vh;
//   padding: 5rem 2rem;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 2rem;
// `;

// const ImageGrid = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 2rem;
//   width: 100%;

//   img {
//     width: 25rem;
//     height: 22rem;
//     object-fit: cover;
//     border-radius: 4px;
//     border: 3px solid #333;
//     box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
//     transition:
//       transform 0.3s ease,
//       box-shadow 0.3s ease;

//     &:hover {
//       transform: scale(1.05) translateY(-10px);
//       box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
//     }
//   }

//   @media (max-width: 768px) {
//     img {
//       width: 100%;
//     }
//   }
// `;

// // == SLIDER == //
// const SliderContainer = styled.div`
//   width: 100%;
//   max-width: 80rem;
//   height: auto;
//   margin: 3rem auto;

//   .swiper {
//     padding: 2rem 0;
//   }

//   .swiper-slide {
//     transition: all 0.4s ease;
//     filter: blur(3px);
//     opacity: 0.5;
//     transform: scale(0.8);
//   }

//   .swiper-slide-active {
//     filter: blur(0);
//     opacity: 1;
//     transform: scale(1);
//   }

//   .swiper-button-next,
//   .swiper-button-prev {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: #f5efefff;
//     background-color: rgba(0, 0, 0, 0.3);
//     /* opacity: 0.5; */
//     width: 4rem;
//     height: 4rem;
//     border-radius: 50%;
//     font-size: 5rem;
//     font-weight: bold;
//     top: 50%;
//     transform: translateY(-50%);
//     position: absolute; /* 🔥 bu shart */
//     z-index: 10;
//   }

//   .swiper-button-next {
//     right: 15rem;
//   }

//   .swiper-button-prev {
//     left: 15rem;
//   }

//   .SlideWrapper {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 30rem;
//     height: 35rem;

//     img {
//       width: 30rem;
//       height: 35rem;
//       object-fit: cover;
//       border-radius: 1px;
//       cursor: pointer;
//     }
//   }
// `;

// // ==== MODAL ====

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.9);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// const ModalImage = styled.img`
//   max-width: 90%;
//   max-height: 90%;
//   border-radius: 10px;
//   box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
//   animation: fadeIn 0.3s ease;

//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: scale(0.9);
//     }
//     to {
//       opacity: 1;
//       transform: scale(1);
//     }
//   }
// `;

// const App = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const openImage = (src) => setSelectedImage(src);
//   const closeImage = () => setSelectedImage(null);
//   return (
//     <>
//       <SectionWrapper>
//         <SectionHero>
//           {/* <img src='/temirMaxsulot/darvoza/darvozaFon6.jpg'/> */}
//         </SectionHero>
//       </SectionWrapper>

//       <GallerySection>
//         <InfoText>
//           <h2>
//             Darvozalar — uy va hovlilarimizning nafaqat xavfsizligini
//             ta'minlaydi, balki uyning umumiy ko'rinishiga ham katta ta'sir
//             ko'rsatadi. Bizning ishxonamiz tomonidan ishlab chiqariladigan
//             darvozalar mustahkam, zamonaviy dizaynga ega va uzoq muddat xizmat
//             qilishi bilan ajralib turadi. Har bir mijozning didi va talabiga mos
//             ravishda turli shakl va naqshlarda darvozalar tayyorlab beramiz.
//           </h2>
//         </InfoText>
//         <ImageGrid>
//           <img
//             src="/temirMaxsulot/boshqa/demaxot.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/boshqa/demaxot.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/boshqa/demaxot2.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/boshqa/demaxot2.jpg')}
//           />
         
//           <img
//             src="/temirMaxsulot/boshqa/demaxot3.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/boshqa/demaxot3.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/boshqa/jalyuzi.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/boshqa/jalyuzi.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/boshqa/jalyuzi2.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/boshqa/jalyuzi2.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/boshqa/kovka.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/boshqa/kovka.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/boshqa/lyustra.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/boshqa/lyustra.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/boshqa/portichka.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/boshqa/portichka.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/boshqa/skameka.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/boshqa/skameka.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/boshqa/stol.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/boshqa/stol.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/boshqa/tapchan.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/boshqa/tapchan.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/tosiq/tosiq1.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/tosiq/tosiq1.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/tosiq/tosiq2.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/tosiq/tosiq2.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/tosiq/tosiq3.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/tosiq/tosiq3.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza10.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza10.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza11.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza11.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza12.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza12.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza13.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza13.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza14.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza14.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza15.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza15.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza16.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza16.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza17.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza17.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza18.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza18.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza41.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza41.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza42.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza42.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza43.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza43.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza44.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza44.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza45.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza45.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza46.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza46.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/47.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/47.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza48.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza48.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza49.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza49.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/darvoza50.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/darvoza50.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/darvoza/kalitka1.jpg"
//             alt="Darvoza"
//             onClick={() => openImage('/temirMaxsulot/darvoza/kalitka1.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/panjara/panjara4.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/panjara/panjara4.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/panjara/panjara2.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/panjara/panjara2.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/panjara/panjara3.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/panjara/panjara3.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/panjara/panjara5.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/panjara/panjara5.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/panjara/panjara6.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/panjara/panjara6.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/panjara/panjara7.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/panjara/panjara7.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/panjara/panjara8.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/panjara/panjara8.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/panjara/panjara9.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/panjara/panjara9.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/panjara/panjara10.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/panjara/panjara10.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/panjara/panjara11.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/panjara/panjara11.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/panjara/panjara12.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/panjara/panjara12.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/panjara/panjara13.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/panjara/panjara13.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/panjara/panjara14.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/panjara/panjara14.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/panjara/panjara15.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/panjara/panjara15.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/panjara/panjara17.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/panjara/panjara17.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/panjara/panjara18.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/panjara/panjara18.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/panjara/panjara16.jpg"
//             alt="Panjara"
//             onClick={() => openImage('/temirMaxsulot/panjara/panjara16.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila1.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila1.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila2.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila2.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila3.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila3.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila4.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila4.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila5.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila5.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila6.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila6.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila7.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila7.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila8.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila8.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila9.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila9.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila10.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila10.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila11.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila11.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila12.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila12.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila13.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila13.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila14.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila14.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila15.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila15.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/Perila16.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/Perila16.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila17.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila17.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila18.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila18.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila19.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila19.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila20.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila20.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/perilla/perila21.jpg"
//             alt="Perila"
//             onClick={() => openImage('/temirMaxsulot/perilla/perila21.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/naves/naves2.jpg"
//             alt="Naves"
//             onClick={() => openImage('/temirMaxsulot/naves/naves2.jpg')}
//           />

//           <img
//             src="/temirMaxsulot/naves/naves5.jpg"
//             alt="Naves"
//             onClick={() => openImage('/temirMaxsulot/naves/naves5.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/naves/naves6.jpg"
//             alt="Naves"
//             onClick={() => openImage('/temirMaxsulot/naves/naves6.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/naves/naves7.jpg"
//             alt="Naves"
//             onClick={() => openImage('/temirMaxsulot/naves/naves7.jpg')}
//           />

//           <img
//             src="/temirMaxsulot/naves/naves3.jpg"
//             alt="Naves"
//             onClick={() => openImage('/temirMaxsulot/naves/naves3.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/naves/naves8.jpg"
//             alt="Naves"
//             onClick={() => openImage('/temirMaxsulot/naves/naves8.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/naves/naves9.jpg"
//             alt="Naves"
//             onClick={() => openImage('/temirMaxsulot/naves/naves9.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/naves/naves10.jpg"
//             alt="Naves"
//             onClick={() => openImage('/temirMaxsulot/naves/naves10.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/naves/naves4.jpg"
//             alt="Naves"
//             onClick={() => openImage('/temirMaxsulot/naves/naves4.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/naves/naves11.jpg"
//             alt="Naves"
//             onClick={() => openImage('/temirMaxsulot/naves/naves11.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/naves/naves12.jpg"
//             alt="Naves"
//             onClick={() => openImage('/temirMaxsulot/naves/naves12.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/naves/naves13.jpg"
//             alt="Naves"
//             onClick={() => openImage('/temirMaxsulot/naves/naves13.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/naves/naves14.jpg"
//             alt="Naves"
//             onClick={() => openImage('/temirMaxsulot/naves/naves14.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/naves/naves15.jpg"
//             alt="Naves"
//             onClick={() => openImage('/temirMaxsulot/naves/naves15.jpg')}
//           />
//           <img
//             src="/temirMaxsulot/naves/tapchan.jpg"
//             alt="Naves"
//             onClick={() => openImage('/temirMaxsulot/naves/tapchan.jpg')}
//           />
//         </ImageGrid>
//         {selectedImage && (
//           <ModalOverlay onClick={closeImage}>
//             <ModalImage src={selectedImage} alt="Selected" />
//           </ModalOverlay>
//         )}
//       </GallerySection>
//       <SliderContainer>
//         <Swiper
//           effect={'coverflow'}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={3}
//           loop={true}
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           }}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 200,
//             modifier: 1,
//             slideShadows: false,
//           }}
//           modules={[EffectCoverflow, Navigation]}
//         >
//           {slidesData.map((slide, index) => (
//             <SwiperSlide key={index} className="SlideWrapper">
//               <img
//                 src={slide.img}
//                 alt={slide.alt}
//                 onClick={() => openImage(slide.img)}
//               />
//             </SwiperSlide>
//           ))}

//           <div className="swiper-button-prev"></div>
//           <div className="swiper-button-next"></div>
//         </Swiper>
//         {selectedImage && (
//           <ModalOverlay onClick={closeImage}>
//             <ModalImage src={selectedImage} alt="Selected" />
//           </ModalOverlay>
//         )}
//       </SliderContainer>
//       <InfoText>
//         <h2>
//           Biz tayyorlaydigan darvozalar har bir mijozning o'ziga xos talabiga
//           qarab, faqat buyurma asosida ishlab chiqariladi. Siz orzu qilgan
//           shakl, naqsh yoki o'lchamdan qat'i nazar, biz uni sifatli metall va
//           zamonaviy texnologiyalar yordamida amalga oshiramiz. <br /> Agar
//           hovlingizga mustahkam, chiroyli va uzoq yillar xizmat qiladigan
//           darvoza xohlasangiz — bugunoq biz bilan bog'laning. Sizning
//           buyurtmangizni individual yondashuv bilan bajarishga tayyormiz!
//         </h2>
//       </InfoText>
//     </>
//   );
// };

// export default App;


// 'use client';
// import React, { useState } from 'react';
// import styled from 'styled-components';

// // 🔹 Rasm yo‘llarini massivlarda tartib bilan saqlaymiz:
// const images = [
//   // 🔸 Darvozalar
//   ...[
//     'darvoza10', 'darvoza11', 'darvoza12', 'darvoza13', 'darvoza14', 'darvoza15',
//     'darvoza16', 'darvoza17', 'darvoza18', 'darvoza19', 'darvoza20', 'darvoza29',
//     'darvoza30', 'darvoza31', 'darvoza32', 'darvoza33', 'darvoza34', 'darvoza35',
//     'darvoza36', 'darvoza37', 'darvoza38', 'darvoza39', 'darvoza40', 'darvoza41',
//     'darvoza42', 'darvoza43', 'darvoza44', 'darvoza45', 'darvoza46', 'darvoza47',
//     'darvoza48', 'darvoza49', 'darvoza50', 'kalitka1',
//   ].map(name => `/temirMaxsulot/darvoza/${name}.jpg`),

//   // 🔸 Panjaralar
//   ...[
//     'panjara2', 'panjara3', 'panjara4', 'panjara5', 'panjara6',
//     'panjara7', 'panjara8', 'panjara9', 'panjara10', 'panjara11',
//     'panjara12', 'panjara13', 'panjara14', 'panjara15', 'panjara16',
//     'panjara17', 'panjara18',
//   ].map(name => `/temirMaxsulot/panjara/${name}.jpg`),

//   // 🔸 Perilalar
//   ...Array.from({ length: 21 }, (_, i) =>
//     `/temirMaxsulot/perilla/perila${i + 1}.jpg`
//   ),

//   // 🔸 Naveslar
//   ...['naves2', 'naves3', 'naves5', 'naves6', 'naves7', 'naves8', 'naves9', 'naves10']
//     .map(name => `/temirMaxsulot/naves/${name}.jpg`),

//   // 🔸 Boshqalar
//   ...[
//     'demaxot', 'demaxot2', 'demaxot3', 'jalyuzi', 'jalyuzi2',
//     'kovka', 'lyustra', 'portichka', 'skameka', 'stol', 'tapchan',
//     'tosiq1', 'tosiq2', 'tosiq3'
//   ].map(name => `/temirMaxsulot/boshqa/${name}.jpg`)
// ];

// // == STYLE ==
// const GallerySection = styled.section`
//   width: 100%;
//   min-height: 100vh;
//   padding: 5rem 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const ImageGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 2rem;

//   img {
//     width: 25rem;
//     height: 22rem;
//     object-fit: cover;
//     border: 3px solid #333;
//     border-radius: 4px;
//     box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
//     cursor: pointer;
//     transition: all 0.3s ease;

//     &:hover {
//       transform: scale(1.05);
//       box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
//     }
//   }
// `;

// const ModalOverlay = styled.div`
//   position: fixed;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.9);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 9999;
// `;

// const ModalImage = styled.img`
//   max-width: 90%;
//   max-height: 90%;
//   border-radius: 10px;
//   animation: fadeIn 0.3s ease;
//   @keyframes fadeIn {
//     from { opacity: 0; transform: scale(0.9); }
//     to { opacity: 1; transform: scale(1); }
//   }
// `;

// // == COMPONENT ==
// const App = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <GallerySection>
//       <ImageGrid>
//         {images.map((src, i) => (
//           <img
//             key={i}
//             src={src}
//             alt={`Temir mahsulot ${i}`}
//             onClick={() => setSelectedImage(src)}
//           />
//         ))}
//       </ImageGrid>

//       {selectedImage && (
//         <ModalOverlay onClick={() => setSelectedImage(null)}>
//           <ModalImage src={selectedImage} alt="Kattalashtirilgan rasm" />
//         </ModalOverlay>
//       )}
//     </GallerySection>
//   );
// };

// export default App;






'use client';
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

// === GALEREYA RASMLARI ===
const allImages = [
  // Darvozalar
  '/temirMaxsulot/darvoza/darvoza10.jpg',
  '/temirMaxsulot/darvoza/darvoza11.jpg',
  '/temirMaxsulot/darvoza/darvoza12.jpg',
  '/temirMaxsulot/darvoza/darvoza13.jpg',
  '/temirMaxsulot/darvoza/darvoza14.jpg',
  '/temirMaxsulot/darvoza/darvoza15.jpg',
  '/temirMaxsulot/darvoza/darvoza16.jpg',
  '/temirMaxsulot/darvoza/darvoza17.jpg',
  '/temirMaxsulot/darvoza/darvoza18.jpg',
  '/temirMaxsulot/darvoza/darvoza41.jpg',
  '/temirMaxsulot/darvoza/darvoza42.jpg',
  '/temirMaxsulot/darvoza/darvoza43.jpg',
  '/temirMaxsulot/darvoza/darvoza44.jpg',
  '/temirMaxsulot/darvoza/darvoza45.jpg',
  '/temirMaxsulot/darvoza/darvoza46.jpg',
  '/temirMaxsulot/darvoza/darvoza48.jpg',
  '/temirMaxsulot/darvoza/darvoza49.jpg',
  '/temirMaxsulot/darvoza/darvoza50.jpg',

  // Panjaralar
  '/temirMaxsulot/panjara/panjara2.jpg',
  '/temirMaxsulot/panjara/panjara3.jpg',
  '/temirMaxsulot/panjara/panjara4.jpg',
  '/temirMaxsulot/panjara/panjara5.jpg',
  '/temirMaxsulot/panjara/panjara6.jpg',
  '/temirMaxsulot/panjara/panjara7.jpg',
  '/temirMaxsulot/panjara/panjara8.jpg',
  '/temirMaxsulot/panjara/panjara9.jpg',
  '/temirMaxsulot/panjara/panjara10.jpg',
  '/temirMaxsulot/panjara/panjara11.jpg',
  '/temirMaxsulot/panjara/panjara12.jpg',
  '/temirMaxsulot/panjara/panjara13.jpg',
  '/temirMaxsulot/panjara/panjara14.jpg',
  '/temirMaxsulot/panjara/panjara15.jpg',
  '/temirMaxsulot/panjara/panjara17.jpg',
  '/temirMaxsulot/panjara/panjara18.jpg',

  // Tosiqlar va boshqa
  '/temirMaxsulot/tosiq/tosiq2.jpg',
  '/temirMaxsulot/tosiq/tosiq3.jpg',
  '/temirMaxsulot/boshqa/jalyuzi.jpg',
  '/temirMaxsulot/boshqa/jalyuzi2.jpg',
  '/temirMaxsulot/boshqa/kovka.jpg',
  '/temirMaxsulot/boshqa/lyustra.jpg',
  '/temirMaxsulot/boshqa/portichka.jpg',
  '/temirMaxsulot/boshqa/skameka.jpg',
  '/temirMaxsulot/boshqa/stol.jpg',
  '/temirMaxsulot/boshqa/tapchan.jpg',
  '/temirMaxsulot/boshqa/demaxot.jpg',
  '/temirMaxsulot/boshqa/demaxot2.jpg',
  '/temirMaxsulot/boshqa/demaxot3.jpg',

   // --- Perila ---
  "/temirMaxsulot/perilla/perila3.jpg",
  "/temirMaxsulot/perilla/perila4.jpg",
  "/temirMaxsulot/perilla/perila5.jpg",
  "/temirMaxsulot/perilla/perila6.jpg",
  "/temirMaxsulot/perilla/perila7.jpg",
  "/temirMaxsulot/perilla/perila8.jpg",
  "/temirMaxsulot/perilla/perila9.jpg",
  "/temirMaxsulot/perilla/perila10.jpg",
  "/temirMaxsulot/perilla/perila11.jpg",
  "/temirMaxsulot/perilla/perila12.jpg",
  "/temirMaxsulot/perilla/perila13.jpg",

  // --- Lesa (havoza) ---
  "/qurilish/havoza/imageCopy.png",
  "/qurilish/havoza/lesa1.jpg",
  "/qurilish/havoza/lesa2.jpg",
  "/qurilish/havoza/lesa3.jpg",
  "/qurilish/havoza/lesa4.jpg",
  "/qurilish/havoza/lesa5.jpg",
  "/qurilish/havoza/lesa6.jpg",
  "/qurilish/havoza/lesa7.jpg",
  "/qurilish/havoza/lesa8.jpg",

  // --- Manalit Havoza ---
  "/qurilish/manalitHavoza/manalitLesa1.jpg",
  "/qurilish/manalitHavoza/manalitLesa2.jpg",
  "/qurilish/manalitHavoza/manalitLesa3.jpg",
  "/qurilish/manalitHavoza/manalitLesa4.jpg",
  "/qurilish/manalitHavoza/manalitLesa6.jpg",
  "/qurilish/manalitHavoza/manalitLesa9.jpg",

  // --- Manalit Ustun (stoyka) ---
  "/qurilish/manalitUstun/stoyka5.jpg",
  "/qurilish/manalitUstun/stoyka6.jpg",
  "/qurilish/manalitUstun/stoyka7.jpg",
  "/qurilish/manalitUstun/stoyka8.jpg",
  "/qurilish/manalitUstun/stoyka9.jpg",
  "/qurilish/manalitUstun/stoyka10.jpg",
  "/qurilish/manalitUstun/stoyka11.jpg",
  "/qurilish/manalitUstun/stoyka12.jpg",
];

// === TASODIFIY ARALASHTIRISH FUNKSIYASI ===
function shuffleArray(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

// === STYLE ===
const GallerySection = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  img {
    width: 25rem;
    height: 22rem;
    object-fit: cover;
    border-radius: 8px;
    border: 3px solid #333;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.05) translateY(-10px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
`;

// === COMPONENT ===
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const shuffledImages = useMemo(() => shuffleArray(allImages), []);

  return (
    <GallerySection>
      <ImageGrid>
        {shuffledImages.map((src, idx) => (
          <img key={idx} src={src} alt="Temir maxsulot" onClick={() => setSelectedImage(src)} />
        ))}
      </ImageGrid>

      {selectedImage && (
        <ModalOverlay onClick={() => setSelectedImage(null)}>
          <ModalImage src={selectedImage} alt="Full view" />
        </ModalOverlay>
      )}
    </GallerySection>
  );
};

export default Gallery;
