'use client';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Navigation } from 'swiper/modules';

const cardData = [
  {
    href: '/maxsulotlar/panjaralar/panjara',
    imgSrc: '/temirMaxsulot/panjara/panjara5.jpg',
    alt: 'Panjara',
    text: 'Romlaringiz uchun yuqori sifatli va mustahkam panjaralar',
  },
  {
    href: '/maxsulotlar/panjaralar/darvoza',
    imgSrc: '/temirMaxsulot/darvoza/darvoza2.jpg',
    alt: 'Darvoza',
    text: 'Uyingizni sifatli va mustahkam darvoza bilan bezating',
  },
  {
    href: '/maxsulotlar/panjaralar/tosiq',
    imgSrc: '/temirMaxsulot/tosiq/tosiq3.jpg',
    alt: 'Tosiq',
    text: "Imoratingiz ko'cha qismini chiroyli to'siqlar bilan bezating",
  },
  {
    href: '/maxsulotlar/panjaralar/soyabon',
    imgSrc: '/temirMaxsulot/naves/naves11.jpg',
    alt: 'Soyabon',
    text: "Quyoshdan va yog'ingarchilikdan himoyalaning va uyingizni yanada go'zal qiling ",
  },
  {
    href: '/maxsulotlar/panjaralar/perilla',
    imgSrc: '/temirMaxsulot/perilla/perila1.jpg',
    alt: 'Perilla',
    text: 'Uyingizni mustahkam perilla bilan bezating va yosh bolalarni havfsizligini taminlang',
  },
  {
    href: '/maxsulotlar/panjaralar/boshqalar',
    imgSrc: '/temirMaxsulot/boshqa/lyustra.jpg',
    alt: 'Qandil',
    text: 'Uyingiz ichini temir qandil bilan jozibali qiling',
  },
];

const slidesData = [
  {
    img: '/qurilish/havoza/lesa6.jpg',
    link: '/maxsulotlar/qurilishlar/havoza',
    alt: 'Lesa',
  },
  {
    img: '/qurilish/manalitHavoza/manalitLesa5.jpg',
    link: '/maxsulotlar/qurilishlar/manalitLesa',
    alt: 'Manalit Lesa',
  },
  {
    img: '/qurilish/manalitUstun/stoyka10.jpg',
    link: '/maxsulotlar/qurilishlar/manalitStoyka',
    alt: 'Manalit Stoyka',
  },
  {
    img: '/qurilish/manalitUstun/stoyka1.jpg',
    link: '/maxsulotlar/qurilishlar/manalitStoyka',
    alt: 'Manalit stoyka',
  },
  {
    img: '/qurilish/manalitHavoza/manalitLesa2.jpg',
    link: '/maxsulotlar/qurilishlar/manalitLesa',
    alt: 'Manalit Lesa',
  },
];

// === Stillar  === //

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
`;

const CardImageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
`;

const CardText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(45, 43, 43, 0.6);
  color: white;
  text-align: center;
  padding: 0.8rem;
  font-size: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    opacity: 1;
  }
`;

const StyledImage = styled.div`
  position: relative;
  overflow: hidden;
  width: 25rem;
  height: 25rem;
  border-radius: 5px;

  a {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 0.4s ease;
    border-radius: 3px;
  }

  &:hover ${CardText} {
    opacity: 1;
  }

  &:hover img {
    transform: perspective(1000px) rotateY(5deg) rotateX(2deg) translateY(-10px);
  }
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 95%;
  height: 40rem;
  margin: 2rem auto;

  video {
    display: block;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 38rem;
    border-radius: 10px;
    object-fit: cover;
  }

  button {
    position: absolute;
    bottom: 12rem;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }
  }
`;

// === Carousel Style ===

const SliderContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  height: 35rem;
  margin: 3rem auto;

  .swiper {
    padding: 2rem 0;
  }

  .swiper-slide {
    transition: all 0.4s ease;
    filter: blur(3px);
    opacity: 0.5;
    transform: scale(0.8);
  }

  .swiper-slide-active {
    filter: blur(0);
    opacity: 1;
    transform: scale(1);
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f5efefff;
    background-color: rgba(0, 0, 0, 0.3);
    /* opacity: 0.5; */
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    font-size: 5rem;
    font-weight: bold;
    top: 50%;
    transform: translateY(-50%);
    position: absolute; /* 🔥 bu shart */
    z-index: 10;
  }

  .swiper-button-next {
    right: 15rem;
  }

  .swiper-button-prev {
    left: 15rem;
  }

  .SlideWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30rem;
    height: 35rem;

    img {
      width: 30rem;
      height: 35rem;
      object-fit: cover;
      border-radius: 12px;
      cursor: pointer;
    }
  }
`;

// === Asosiy Komponent === //

const CardWrapper = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <SectionWrapper>
     <VideoContainer>
  <video ref={videoRef} muted loop>
    <source
      src="https://drive.google.com/uc?export=download&id=1hBOmnD2ZuqHFlAXWU4RUarCX69Q7SrRv"
      type="video/mp4"
    />
    Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi.
  </video>
  <button onClick={togglePlay}>
    {isPlaying ? 'Pause' : 'Play'}
  </button>
</VideoContainer>
{/* <VideoContainer>
  <iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/NP2UarcLqYE?controls=0&modestbranding=1&rel=0&showinfo=0"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
</VideoContainer> */}

      <CardImageContainer>
        {cardData.map((card, index) => (
          <StyledImage key={index}>
            <Link href={card.href}>
              <img src={card.imgSrc} alt={card.alt} />
              <CardText>{card.text}</CardText>
            </Link>
          </StyledImage>
        ))}
      </CardImageContainer>
      <SliderContainer>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Navigation]}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className="SlideWrapper">
              <Link href={slide.link}>
                <img src={slide.img} alt={slide.alt} />
              </Link>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </SliderContainer>
    </SectionWrapper>
  );
};

export default CardWrapper;
